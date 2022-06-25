import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../App.module.css";

function Home() {
  return (
    <div className={[styles.mainHome, styles.container].join(" ")}>
      <Header />
      <div className={styles.content}>
        <div className={styles.subLink01}>
          <Link to="/sub01"><span>To Do List</span></Link>
        </div>
        <div className={styles.subLink02}>
          <h4 className={styles.mainSectTitle}>Movie</h4>
          <ul className={styles.mainSectList}>
            <li>
              <div className={styles.mainMovieThumb}></div>
              <h3 className={styles.mainDesc}>
                Movie Title
                <span className={styles.mainDate}>Released 2022/06/26</span>
              </h3>
            </li>
            <li>
              <div className={styles.mainMovieThumb}></div>
              <h3 className={styles.mainDesc}>
                Movie Title
                <span className={styles.mainDate}>Released 2022/06/26</span>
              </h3>
            </li>
            <li>
              <div className={styles.mainMovieThumb}></div>
              <h3 className={styles.mainDesc}>
                Movie Title
                <span className={styles.mainDate}>Released 2022/06/26</span>
              </h3>
            </li>
          </ul>
        </div>
        <div className={styles.subLink03}>
          <h4 className={styles.mainSectTitle}>News</h4>
          <div className={styles.mainSectBox}>
            <div className={styles.mainNewsThumb}></div>
            <h3 className={styles.mainDesc}>
              Movie Title
              <span className={styles.mainDate}>Released 2022/06/26</span>
            </h3>
            <p className={styles.mainText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;