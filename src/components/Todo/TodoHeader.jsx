import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../model/slices/todoSlice.js";

import s from "./styles/TodoHeader.module.scss";

const TodoHeader = () => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const handleKeyUp = (e) => {
    const title = e.target.value.trim();
    if (e.key === "Enter" && title !== "") {
      dispatch(addTodo({ title }));
      setTask("");
    }
  };

  return (
    <header className={s.root}>
      <label className={s.label} htmlFor="new-task">
        {""}
      </label>
      <input
        className={s.input}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
        id="new-task"
        type="text"
        placeholder="What needs to be done?"
        required
      />
    </header>
  );
};

export default TodoHeader;
