import React from "react";

export const Input = (props) => {
  return (
    <div className="mb-4">
      <input
        className="p-2 border border-gray-300   w-44 sm:w-72  rounded-md "
        placeholder="Write an artical about XState"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
