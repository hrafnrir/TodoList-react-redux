import { useSelector } from "react-redux";

import { selectVisibleTodos } from "../../model/selectors.js";

import TodoItemElement from "./TodoItemElement.jsx";

import s from "./styles/TodoList.module.scss";

const TodoList = () => {
  const todoItems = useSelector(selectVisibleTodos).map((item, index) => (
    <TodoItemElement key={index} todo={item} />
  ));

  return (
    <section>
      <ul className={s.list}>{todoItems}</ul>
    </section>
  );
};

export default TodoList;
