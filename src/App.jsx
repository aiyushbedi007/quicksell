import React, { useEffect, useState } from "react";
import Display from "./Display";
import KanbanBoard from "./KanbanBoard";
import {
  faBoxArchive,
  faCircleCheck,
  faCircleHalfStroke,
  faCircleXmark,
  faEllipsis,
  faCircleExclamation,
  faVolumeHigh,
  faVolumeLow,
  faVolumeOff,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import "./App.css";

const URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

const STATUS = [
  { id: "Backlog", title: "Backlog", count: 0, icon: faBoxArchive },
  { id: "Todo", title: "Todo", count: 0, icon: faCircle },
  {
    id: "In progress",
    title: "In Progress",
    count: 0,
    icon: faCircleHalfStroke,
  },
  { id: "Done", title: "Done", count: 0, icon: faCircleCheck },
  { id: "Cancelled", title: "Cancelled", count: 0, icon: faCircleXmark },
];
const PRIORITY = [
  { id: 0, title: "No priority", count: 0, icon: faEllipsis },
  { id: 4, title: "Urgent", count: 0, icon: faCircleExclamation },
  { id: 3, title: "High", count: 0, icon: faVolumeHigh },
  { id: 2, title: "Medium", count: 0, icon: faVolumeLow },
  { id: 1, title: "Low", count: 0, icon: faVolumeOff },
];

const App = () => {
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);
  const [columns, setColumns] = useState(STATUS);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGroup = (group) => {
    let tickets = data.tickets;
    if (group === "Status") {
      setColumns(
        STATUS.map((status) => ({
          ...status,
          count: tickets.filter((ticket) => ticket.status === status.id).length,
        }))
      );
      setCards(
        tickets.map((item) => ({
          ...item,
          columnId: item.status,
        }))
      );
    }
    if (group === "Priority") {
      setColumns(
        PRIORITY.map((priority) => ({
          ...priority,
          count: tickets.filter((ticket) => ticket.priority === priority.id)
            .length,
        }))
      );
      setCards(
        tickets.map((item) => ({
          ...item,
          columnId: item.priority,
        }))
      );
    }
    if (group === "User") {
      let users = data.users;
      setColumns(
        users.map((user) => ({
          id: user.id,
          title: user.name,
        }))
      );
      setCards(
        tickets.map((item) => ({
          ...item,
          columnId: item.userId,
        }))
      );
    }
  };

  const handleSort = (order) => {
    let newCards = [...cards];
    if (order === "Priority") {
      newCards.sort((a, b) => b.priority - a.priority);
      setCards(newCards);
      console.log("newCards", newCards);
    }
    if (order === "Title") {
      newCards.sort((a, b) => b.title.localeCompare(a.title));
      setCards(newCards);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        let tickets = res.tickets;
        setColumns(
          STATUS.map((status) => ({
            ...status,
            count: tickets.filter((ticket) => ticket.status === status.id)
              .length,
          }))
        );
        setCards(
          tickets.map((item) => ({
            ...item,
            columnId: item.status,
          }))
        );
        setLoading(false);
      })
      .catch((err) => {
        setHasError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>Error occured.</div>
      ) : (
        <div className="App">
          <Display handleGroup={handleGroup} handleSort={handleSort} />
          <KanbanBoard columns={columns} cards={cards} setCards={setCards} />
        </div>
      )}
    </div>
  );
};

export default App;
