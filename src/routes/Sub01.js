import ToDoList from "../components/ToDoList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../App.module.css";

function Sub01() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <ToDoList />
      </div>
      <Footer />
    </div>
  );
}

export default Sub01;