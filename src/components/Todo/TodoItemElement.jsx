import s from "./styles/TodoItemElement.module.scss";

const TodoItemElement = () => {
  return (
    <li className={s.root}>
      <input className={s.checkbox} id="task-checkbox" type="checkbox" />
      <label className={s.label} htmlFor="task-checkbox">
        Task body
      </label>
      <input className={s.editInput} type="text" hidden />
      <button className={s.deleteBtn}></button>
    </li>
  );
};

export default TodoItemElement;
