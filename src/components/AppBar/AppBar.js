import Navigation from "../Navigation/Navigation";
import styles from "./Appbar.module.css";

//общая навигация для всех
export default function Appbar() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
