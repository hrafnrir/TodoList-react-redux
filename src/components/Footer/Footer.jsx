import s from './../../styles/modules/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.pageFooter}>
      <ul className={s.pageFooter__list}>
        <li className={s.pageFooter__item}>Double-click to edit a todo</li>
        <li className={s.pageFooter__item}>
          <button className={s.pageFooter__themeBtn}>Dark theme</button>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
