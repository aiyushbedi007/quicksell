import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEllipsis,
  faCircleExclamation,
  faVolumeHigh,
  faVolumeLow,
  faVolumeOff,
} from "@fortawesome/free-solid-svg-icons";

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

  const handleIcon = (priority) => {
    switch (priority) {
      case 0:
        return faEllipsis;
      case 1:
        return faVolumeOff;
      case 2:
        return faVolumeLow;
      case 3:
        return faVolumeHigh;
      case 4:
        return faCircleExclamation;
      default:
        return faEllipsis;
    }
  };

  return (
    <div className="kanban-board">
      {columns.map((column) => (
        <div className="column" key={column.id}>
          <div className="columnBox">
            <div className="title">
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
                  <p>{card.id}</p>
                  <h4>{card.title}</h4>
                  <FontAwesomeIcon
                    icon={handleIcon(card.priority)}
                    className="cardTag"
                  />
                  {card.tag?.map((item) => (
                    <span>{item}</span>
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
