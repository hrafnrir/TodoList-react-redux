import TodoItemElement from "./TodoItemElement.jsx";

import s from "./styles/TodoList.module.scss";

const TodoList = () => {
  return (
    <section>
      <ul className={s.list}>
        <TodoItemElement />
      </ul>
    </section>
  );
};

export default TodoList;
