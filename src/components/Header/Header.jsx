import { useDispatch } from "react-redux";

import { toggleTheme } from "../../model/slices/appSlice.js";

import s from "./styles/Header.module.scss";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className={s.root}>
      <h1 className={s.heading}>Todo list</h1>
      <button
        className={s.themeBtn}
        onClick={() => dispatch(toggleTheme())}
      ></button>
    </header>
  );
};

export default Header;
