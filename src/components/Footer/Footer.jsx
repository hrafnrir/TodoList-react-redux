import { useSelector, useDispatch } from "react-redux";

import { selectDarkTheme } from "../../model/selectors.js";
import { toggleTheme } from "../../model/slices/appSlice.js";

import s from "./styles/Footer.module.scss";

const Footer = () => {
  const isThemeDark = useSelector(selectDarkTheme);

  const dispatch = useDispatch();

  return (
    <footer className={s.root}>
      <ul className={s.list}>
        <li className={s.item}>Double-click to edit a todo</li>
        <li className={s.item}>
          <button
            className={s.themeBtn}
            onClick={() => dispatch(toggleTheme())}
          >
            {!isThemeDark ? "Dark theme" : "Light theme"}
          </button>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
