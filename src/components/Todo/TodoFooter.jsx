import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";

import {
  selectFilter,
  selectTotalActiveTodos,
  selectDisabledFilter,
} from "../../model/selectors.js";
import {
  deleteCompletedTodos,
  updateFilter,
} from "../../model/slices/todoSlice.js";

import s from "./styles/TodoFooter.module.scss";

const TodoFooter = () => {
  const selectedFilter = useSelector(selectFilter);
  const totalActiveTodos = useSelector(selectTotalActiveTodos);
  const disabledFilter = useSelector(selectDisabledFilter);

  const dispatch = useDispatch();

  const handleClickOnFilter = (e) => {
    const name = e.target.name;
    if (name === disabledFilter) return;
    dispatch(updateFilter({ filter: name }));
  };

  const getFilterClass = (filter) =>
    cn(s.filter, {
      [s.filter_selected]: selectedFilter === filter,
      [s.filter_nonActive]: disabledFilter === filter,
    });

  return (
    <footer className={s.root}>
      <span className={s.totalTodos}>
        <span>{totalActiveTodos}</span> item{totalActiveTodos !== 1 && "s"} left
      </span>
      <div className={s.filtersList}>
        <button
          className={getFilterClass("all")}
          onClick={handleClickOnFilter}
          name="all"
        >
          All
        </button>
        <button
          className={getFilterClass("active")}
          onClick={handleClickOnFilter}
          name="active"
        >
          Active
        </button>
        <button
          className={getFilterClass("completed")}
          onClick={handleClickOnFilter}
          name="completed"
        >
          Completed
        </button>
      </div>
      {!(disabledFilter === "completed") && (
        <button
          className={s.clearBtn}
          onClick={() => dispatch(deleteCompletedTodos())}
        >
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default TodoFooter;
