import s from './../../styles/modules/Header.module.scss';

const Header = () => {
  return (
    <header className={s.pageHeader}>
      <h1 className={s.pageHeader__heading}>Todo list</h1>
      <button className={s.pageHeader__themeBtn}></button>
    </header>
  );
};

export default Header;
