import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const TodoForm = (props) => {
  const [input, setInput] = useState();

  const handleInputChange = (event) => {
    let x = event.target.value;
    if (x == " ") {
      return;
    }
    setInput(x);
  };

  const handleSave = () => {
    props.onClose();
    props.onSave(input);
    setInput("");
  };

  return (
    <div className="p-4 border  border-gray-300 shadow-md my-4 rounded-md bg-green-200">
      <h3 className="py-4">Create a todo</h3>
      <form onSubmit={handleSave}>
        <Input value={input} onChange={handleInputChange} />
        <div className="flex gap-6">
          <Button disabled={!input}>save</Button>
          <Button them="secondary">Cancel</Button>
        </div>
      </form>
    </div>
  );
};
