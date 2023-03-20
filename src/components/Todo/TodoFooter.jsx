import s from "./../../styles/modules/TodoFooter.module.scss";

const TodoFooter = () => {
  return (
    <footer className={s.todoFooter}>
      <span className={s.todoFooter__total}>
        <span>1</span> items left
      </span>
      <div className={s.todoFooter__filtersList}>
        <button className={s.todoFooter__filter}>All</button>
        <button className={s.todoFooter__filter}>Active</button>
        <button className={s.todoFooter__filter}>Completed</button>
      </div>
      <button className={s.todoFooter__clearBtn}>Clear completed</button>
    </footer>
  );
};

export default TodoFooter;
