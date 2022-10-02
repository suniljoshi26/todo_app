import React, { useState } from "react";
import { Button } from "./Button";
import H1 from "./H1";
import { H3 } from "./H3";
import Header from "./Header";
import { TodoForm } from "./TodoForm";
import { TodoRow } from "./TodoRow";
const TodoPage = () => {
  const [formVisable, setFormVisable] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const handleShowForm = () => {
    setFormVisable(true);
  };
  const handleHideForm = () => setFormVisable(false);
  const addTodo = (task) => {
    setTodoList([...todoList, task]);
    console.log(todoList);
  };
  const markAsDone = (task) => {
    const newTodo = todoList.filter((todo) => todo !== task);
    setTodoList(newTodo);
    setDoneList([...doneList, task]);
  };
  const markAsNotDone = (task) => {
    const newDone = doneList.filter((todo) => todo !== task);
    setDoneList(newDone);
    setTodoList([...todoList, task]);
  };
  return (
    <>
      <Header />
      <div className="px-40">
        <H1>Things to get done</H1>
        <H3>Things to do</H3>
        {todoList.map((todo) => (
          <TodoRow key={todo} done={false} onStatusChange={markAsDone}>
            {todo}
          </TodoRow>
        ))}
        {!formVisable && (
          <Button them="highlight" onClick={handleShowForm}>
            +Add to todo
          </Button>
        )}
        {formVisable && <TodoForm onClose={handleHideForm} onSave={addTodo} />}

        {doneList.map((todo) => (
          <TodoRow key={todo} done={true} onStatusChange={markAsNotDone}>
            {todo}
          </TodoRow>
        ))}
      </div>
    </>
  );
};
export default TodoPage;
