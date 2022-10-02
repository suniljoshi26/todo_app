import React from "react";
import { Checkbox } from "./Checkbox";

export const TodoRow = (props) => {
  const onChackBoxChange = (event) => {
    props.onStatusChange(props.children);
  };
  return (
    <div className="flex gap-2  items-center p-2">
      <Checkbox checked={props.done} onChange={onChackBoxChange} />
      <span>{props.children} </span>
    </div>
  );
};
