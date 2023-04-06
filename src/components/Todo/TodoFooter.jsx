import { useDispatch } from "react-redux";

import { deleteCompletedTodos } from "../../model/slices/todoSlice.js";

import s from "./styles/TodoFooter.module.scss";

const TodoFooter = () => {
  const dispatch = useDispatch();

  return (
    <footer className={s.root}>
      <span className={s.totalTodos}>
        <span>1</span> items left
      </span>
      <div className={s.filtersList}>
        <button className={s.filter}>All</button>
        <button className={s.filter}>Active</button>
        <button className={s.filter}>Completed</button>
      </div>
      <button
        className={s.clearBtn}
        onClick={() => dispatch(deleteCompletedTodos())}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default TodoFooter;
