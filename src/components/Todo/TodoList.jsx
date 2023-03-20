import TodoItemElement from "./TodoItemElement.jsx";
import s from "./../../styles/modules/TodoList.module.scss";

const TodoList = () => {
  return (
    <section>
      <ul className={s.todoList}>
        <TodoItemElement />
      </ul>
    </section>
  );
};

export default TodoList;
