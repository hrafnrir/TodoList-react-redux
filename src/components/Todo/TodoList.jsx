import { useSelector } from "react-redux";

import { selectTodoIds } from "../../model/selectors.js";

import TodoItemElement from "./TodoItemElement.jsx";

import s from "./styles/TodoList.module.scss";

const TodoList = () => {
  const todoItems = useSelector(selectTodoIds)
    .sort((a, b) => b - a)
    .map((item) => <TodoItemElement key={item} id={item} />);

  return (
    <section>
      <ul className={s.list}>{todoItems}</ul>
    </section>
  );
};

export default TodoList;
