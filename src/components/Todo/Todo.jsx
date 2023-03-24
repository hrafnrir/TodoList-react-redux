import TodoHeader from "./TodoHeader.jsx";
import TodoList from "./TodoList.jsx";
import TodoFooter from "./TodoFooter.jsx";

import s from "./styles/Todo.module.scss";

const Todo = () => {
  return (
    <section className={s.root}>
      <TodoHeader />
      <div className={s.mainBlock}>
        <TodoList />
        <TodoFooter />
      </div>
    </section>
  );
};

export default Todo;
