import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Todo from "./components/Todo/Todo.jsx";
import s from "./styles/modules/App.module.scss";

const App = () => {
  return (
    <div className={s.background}>
      <div className={s.container}>
        <Header />
        <Todo />
        <Footer />
      </div>
    </div>
  );
};

export default App;
