import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import backIcon from "./circle-dashed-svgrepo-com.svg";
import checkIcon from "./icons8-checkmark.svg";
import todoIcon from "./icons8-circle-50.png";
import low from "./icons8-low-connection-24.png";
import medium from "./icons8-signal-med.png";
import high from "./icons8-signal-24.png";
import urgent from "./icons8-high-priority-30.png";
import elipsis from "./icons8-ellipsis-30.png";

const KanbanBoard = ({ columns, cards, setCards }) => {
  const handleDragStart = (e, cardId) => {
    e.dataTransfer.setData("cardId", cardId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, columnId) => {
    const cardId = e.dataTransfer.getData("cardId");

    const newCards = cards.map((card) => {
      if (card.id === cardId) {
        return {
          ...card,
          columnId,
        };
      }
      return card;
    });
    setCards(newCards);
  };

  const handleStatusIcon = (status) => {
    switch (status) {
      case "Backlog":
        return backIcon;
      case "Todo":
      case "In progress":
        return todoIcon;
      case "Done":
        return checkIcon;
      default:
        return backIcon;
    }
  };

  const handleIcon = (priority) => {
    switch (priority) {
      case 0:
        return elipsis;
      case 1:
        return low;
      case 2:
        return medium;
      case 3:
        return high;
      case 4:
        return urgent;
      default:
        return elipsis;
    }
  };

  return (
    <div className="kanban-board">
      {columns.map((column) => (
        <div className="column" key={column.id}>
          <div className="columnBox">
            <div className="title">
              {column.icon2 && (
                <img src={column.icon2} alt="icon" className="columnIcon" />
              )}
              <FontAwesomeIcon icon={column.icon} />
              <h4>{column.title}</h4>
              <span>{column.count}</span>
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faPlus} />
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
          {cards
            .filter((card) => card.columnId === column.id)
            .map((card) => (
              <div
                className="card"
                draggable
                onDragStart={(e) => handleDragStart(e, card.id)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, column.id)}
                key={card.id}
              >
                <div>
                  <span className="card-id">{card.id}</span>
                  <div className="card-title">
                    <img
                      src={handleStatusIcon(card.status)}
                      alt="icon"
                      className="columnIcon"
                    />
                    <h4>{card.title}</h4>
                  </div>
                  <img
                    src={handleIcon(card.priority)}
                    className="cardTag"
                    alt="icon"
                  />
                  {card.tag?.map((item) => (
                    <span className="card-tag">{item}</span>
                  ))}
                </div>
                <FontAwesomeIcon icon={card.icon} />
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
