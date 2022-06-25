import { Link } from "react-router-dom";
import home from "../img/home.svg";
import movie from "../img/movie.svg";
import news from "../img/news.svg";
import todolist from "../img/todolist.svg";
import styles from "../App.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div><Link to="/"><img src={home} alt="홈" /></Link></div>
      <div><Link to="/sub01"><img src={movie} alt="영화" /></Link></div>
      <div><Link to="/sub01"><img src={news} alt="뉴스" /></Link></div>
      <div><Link to="/sub01"><img src={todolist} alt="투두리스트" /></Link></div>
    </footer>
  );
}

export default Footer;