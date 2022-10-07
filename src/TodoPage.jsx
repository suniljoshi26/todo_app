import React, { useState } from "react";
import { Button } from "./Button";
import H1 from "./H1";
import { H3 } from "./H3";
import Header from "./Header";
import { Msg } from "./Msg";
import { TodoForm } from "./TodoForm";
import { TodoRow } from "./TodoRow";

const TodoPage = () => {
  const a = JSON.parse(localStorage.getItem("todoList")) || [];
  const b = JSON.parse(localStorage.getItem("doneList")) || [];
  const [formVisable, setFormVisable] = useState(false);
  const [todoList, setTodoList] = useState(a);
  const [doneList, setDoneList] = useState(b);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  localStorage.setItem("doneList", JSON.stringify(doneList));
  const handleShowForm = () => {
    setFormVisable(true);
  };
  const handleHideForm = () => setFormVisable(false);

  const addTodo = (task) => {
    const t = [...todoList, task];
    setTodoList(t);
    console.log("sdha", t);

    // console.log("TODO", setTodoList);
    // const setTodo = JSON.stringify(t);
    // localStorage.setItem("myTodo", t);
  };
  const markAsDone = (task) => {
    const newTodo = todoList.filter((todo) => todo !== task);
    setTodoList(newTodo);

    setDoneList([...doneList, task]);
    console.log("sdasds", newTodo);
  };
  const markAsNotDone = (task) => {
    const newDone = doneList.filter((todo) => todo !== task);
    setDoneList(newDone);
    setTodoList([...todoList, task]);
  };

  const todoDelete = (task, done) => {
    if (done) {
      const newDoneList = doneList.filter((todo) => todo !== task);
      setDoneList(newDoneList);
    } else {
      const newTodoList = todoList.filter((todo) => todo !== task);
      setTodoList(newTodoList);
    }
  };
  return (
    <div className="bg-yellow-100 h-screen">
      <Header />
      <div className="  px-10 sm:px-40">
        <H1>Things to get done</H1>
        <H3>Things to do</H3>
        {!todoList.length && <Msg />}
        {todoList.map((todo, index) => (
          <TodoRow
            key={index}
            id={index}
            done={false}
            onStatusChange={markAsDone}
            onDelete={todoDelete}
          >
            {todo}
          </TodoRow>
        ))}
        {!formVisable && (
          <Button them="highlight" onClick={handleShowForm}>
            +Add to todo
          </Button>
        )}
        {formVisable && <TodoForm onClose={handleHideForm} onSave={addTodo} />}
        <div className="mt-3">
          {!doneList.length && <Msg />}
          <H3>Things to done</H3>
          {doneList.map((todo, index) => (
            <TodoRow
              key={index}
              id={index}
              done={true}
              onStatusChange={markAsNotDone}
              onDelete={todoDelete}
            >
              {todo}
            </TodoRow>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TodoPage;
