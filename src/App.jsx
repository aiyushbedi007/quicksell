import React, { useEffect, useState } from "react";
import Display from "./Display";
import KanbanBoard from "./KanbanBoard";
import { URL, STATUS, PRIORITY, ICONS } from "./constants";
import "./App.css";

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
          icon: ICONS[Math.floor(Math.random() * ICONS.length)],
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
          icon: ICONS[Math.floor(Math.random() * ICONS.length)],
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
          icon: ICONS[Math.floor(Math.random() * ICONS.length)],
          count: tickets.filter((ticket) => ticket.userId === user.id).length,
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
