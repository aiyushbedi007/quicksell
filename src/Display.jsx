import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const GROUPS = ["Status", "User", "Priority"];
const SORT = ["Priority", "Title"];

const Display = ({ handleGroup, handleSort }) => {
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState(GROUPS[0]);
  const [order, setOrder] = useState(SORT[0]);

  return (
    <>
      <div
        className="display"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <FontAwesomeIcon icon={faSliders} />
        Display
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      {open && (
        <div className="filterBox">
          <div className="filter">
            Grouping
            <select
              value={group}
              onChange={(e) => {
                handleGroup(e.target.value);
                setGroup(e.target.value);
              }}
            >
              {GROUPS.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="filter">
            Ordering
            <select
              value={order}
              onChange={(e) => {
                handleSort(e.target.value);
                setOrder(e.target.value);
              }}
            >
              {SORT.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default Display;
