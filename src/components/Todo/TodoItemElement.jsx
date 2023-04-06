import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import {
  editTodo,
  toggleTodoCompleted,
  deleteTodo,
} from "../../model/slices/todoSlice.js";
import { selectTodoWithProps } from "../../model/selectors.js";

import s from "./styles/TodoItemElement.module.scss";

const TodoItemElement = ({ id }) => {
  const { title, isCompleted } = useSelector(selectTodoWithProps(id));

  const [editing, setEditing] = useState(false);
  const [task, setTask] = useState(title);

  const dispatch = useDispatch();

  const editInput = useRef(null);

  useEffect(() => {
    if (editInput.current) {
      editInput.current.focus();
    }
  }, [editing]);

  const handleSubmit = (method) => {
    const newTitle = task.trim();
    switch (newTitle) {
      case title:
        setTask(title);
        break;
      case "":
        method === "keyUp" ? dispatch(deleteTodo({ id })) : setTask(title);
        break;
      default:
        dispatch(editTodo({ id, newTitle }));
    }
    setEditing(false);
  };

  return (
    <li className={s.root}>
      {!editing && (
        <>
          <input
            className={s.checkbox}
            onChange={() => dispatch(toggleTodoCompleted({ id }))}
            type="checkbox"
            checked={isCompleted}
          />
          <label className={s.label} onDoubleClick={() => setEditing(true)}>
            {title}
          </label>
        </>
      )}
      {editing && (
        <input
          className={s.editInput}
          onChange={(e) => setTask(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && handleSubmit("keyUp")}
          onBlur={() => handleSubmit("click")}
          type="text"
          ref={editInput}
          value={task}
        />
      )}
      <button
        className={s.deleteBtn}
        onClick={() => dispatch(deleteTodo({ id }))}
      ></button>
    </li>
  );
};

TodoItemElement.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TodoItemElement;
