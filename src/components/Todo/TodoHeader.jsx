import s from "./../../styles/modules/TodoHeader.module.scss";

const TodoHeader = () => {
  return (
    <header className={s.todoHeader}>
      <label className={s.todoHeader__label} htmlFor="new-task">
        {""}
      </label>
      <input
        className={s.todoHeader__field}
        id="new-task"
        type="text"
        placeholder="What needs to be done?"
        required
      />
    </header>
  );
};

export default TodoHeader;
