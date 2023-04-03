import s from "./styles/TodoHeader.module.scss";

const TodoHeader = () => {
  return (
    <header className={s.root}>
      <label className={s.label} htmlFor="new-task">
        {""}
      </label>
      <input
        className={s.input}
        id="new-task"
        type="text"
        placeholder="What needs to be done?"
        required
      />
    </header>
  );
};

export default TodoHeader;
