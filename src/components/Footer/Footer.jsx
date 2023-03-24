import s from "./styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.root}>
      <ul className={s.list}>
        <li className={s.item}>Double-click to edit a todo</li>
        <li className={s.item}>
          <button className={s.themeBtn}>Dark theme</button>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
