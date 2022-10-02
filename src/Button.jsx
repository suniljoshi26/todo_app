import { Input } from "postcss";
import React from "react";

export const Button = (props) => {
  let themClass =
    " text-white rounded-md bg-yellow-500 border-transparent  hover:bg-yellow-600 ";
  let radiusClass = "rounded-md";

  if (props.them === "highlight") {
    radiusClass = " mt-2 rounded-full";
  }
  if (props.them === "secondary") {
    themClass = "text-gray-900 bg-white  border-gray-300 hover:bg-gray-600";
  }

  return (
    <div>
      <button
        className={
          "px-4 py-2 text-sm font-medium  border  shadow-sm " +
          themClass +
          radiusClass
        }
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};
