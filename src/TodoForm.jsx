import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const TodoForm = (props) => {
  const [input, setInput] = useState();

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSave = () => {
    props.onClose();
    props.onSave(input);
    setInput("");
  };

  return (
    <div className="p-4 border  border-gray-300 shadow-md my-4 rounded-md">
      <h3 className="py-4">Create a todo</h3>
      <Input value={input} onChange={handleInputChange} />
      <div className="flex gap-6">
        <Button disabled={!input} onClick={handleSave}>
          save
        </Button>
        <Button them="secondary" onClick={props.onClose}>
          Cancle
        </Button>
      </div>
    </div>
  );
};
