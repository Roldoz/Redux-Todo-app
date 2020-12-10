import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toggleTodo } from "../redux/actions";
import { editTodo } from "../redux/actions";
import { useDispatch } from "react-redux";
import EditTodo from "./EditTodo";
import Button from "@material-ui/core/Button";

const ListTodo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos);

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const [newDesc, setNewDesc] = useState("");
  const handleChangeDesc = (e) => {
    setNewDesc(e.target.value);
  };

  return (
    <div className="container">
      {todoList.map((todo) => (
        <div key={todo.id}>
          <ul className="todo-ul">
            <li
              style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
            >
              {todo.description}
            </li>

            <div>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => {
                  handleToggle(todo.id);
                }}
              >
                Done
              </Button>

              <EditTodo
                handleEdit={() => {
                  dispatch(editTodo(todo.id, newDesc));
                  console.log(todo.id, newDesc);
                }}
                handleChangeDesc={handleChangeDesc}
                newDesc={newDesc}
              />
            </div>
          </ul>
        </div>
      ))}
    </div>
  );
};
export default ListTodo
