import s from "./../../styles/modules/TodoItemElement.module.scss";

const TodoItemElement = () => {
  return (
    <li className={s.item}>
      <input className={s.itemCheckbox} id="task-checkbox" type="checkbox" />
      <label className={s.itemLabel} htmlFor="task-checkbox">
        Task body
      </label>
      <input className={s.itemEditInput} type="text" hidden />
      <button className={s.itemDeleteBtn}></button>
    </li>
  );
};

export default TodoItemElement;
