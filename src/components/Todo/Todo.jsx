import TodoHeader from "./TodoHeader.jsx";
import TodoList from "./TodoList.jsx";
import TodoFooter from "./TodoFooter.jsx";
import s from "./../../styles/modules/Todo.module.scss";

const Todo = () => {
  return (
    <section className={s.todo}>
      <TodoHeader />
      <div className={s.todo__mainBlock}>
        <TodoList />
        <TodoFooter />
      </div>
    </section>
  );
};

export default Todo;
