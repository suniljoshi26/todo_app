import React from "react";

export const Checkbox = (props) => {
  return (
    <div>
      <input
        checked={props.checked}
        onChange={props.onChange}
        type="Checkbox"
        className="w-4 h-4 "
      ></input>
    </div>
  );
};
