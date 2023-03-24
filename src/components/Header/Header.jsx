import s from "./styles/Header.module.scss";

const Header = () => {
  return (
    <header className={s.root}>
      <h1 className={s.heading}>Todo list</h1>
      <button className={s.themeBtn}></button>
    </header>
  );
};

export default Header;
