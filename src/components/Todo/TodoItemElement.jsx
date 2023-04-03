import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { selectTodoWithProps } from "../../model/selectors";

import s from "./styles/TodoItemElement.module.scss";

const TodoItemElement = ({ id }) => {
  const { title, isCompleted } = useSelector(selectTodoWithProps(id));

  return (
    <li className={s.root}>
      <input
        className={s.checkbox}
        id="task-checkbox"
        type="checkbox"
        checked={isCompleted}
      />
      <label className={s.label} htmlFor="task-checkbox">
        {title}
      </label>
      <input className={s.editInput} type="text" hidden />
      <button className={s.deleteBtn}></button>
    </li>
  );
};

TodoItemElement.propTypes = {
  id: PropTypes.number.isRequired,
};

export default TodoItemElement;
