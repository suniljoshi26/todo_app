import React from "react";
import { Checkbox } from "./Checkbox";
import { AiFillDelete } from "react-icons/ai";

export const TodoRow = (props) => {
  const onChackBoxChange = () => {
    props.onStatusChange(props.children);
  };
  const onDelete = () => {
    props.onDelete(props.children, props.done);
  };

  return (
    <div className="flex gap-2  items-center px-2">
      <Checkbox checked={props.done} onChange={onChackBoxChange} />
      <span>{props.children} </span>
      <AiFillDelete onClick={onDelete} />
    </div>
  );
};
