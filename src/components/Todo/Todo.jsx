import { useSelector } from "react-redux";
import cn from "classnames";

import { selectTodoIds } from "../../model/selectors.js";

import TodoHeader from "./TodoHeader.jsx";
import TodoList from "./TodoList.jsx";
import TodoFooter from "./TodoFooter.jsx";

import s from "./styles/Todo.module.scss";

const Todo = () => {
  const isTodoEmpty = !useSelector(selectTodoIds).length;
  const rootClass = cn(s.root, { [s.root_withoutItems]: isTodoEmpty });

  return (
    <section className={rootClass}>
      <TodoHeader />
      {!isTodoEmpty && (
        <div className={s.mainBlock}>
          <TodoList />
          <TodoFooter />
        </div>
      )}
    </section>
  );
};

export default Todo;
