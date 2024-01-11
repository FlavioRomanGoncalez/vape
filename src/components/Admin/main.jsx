// COMPONENTS
import Table from "./Table/main";
// import Navbar from "../Navbar/main";

// STYLE
import styles from "./main.module.css";

export default function Admin() {
  return (
    <>
      {/* <Navbar /> */}

      <main
        className={`${styles.container} animate__animated animate__fadeInUp`}
      >
        <h1 className={styles.title}>CARGAR CÓDIGO</h1>
        <div className={styles.table}>
          <h2 className={styles.subtitle}>LISTA</h2>
          <Table />
        </div>
      </main>
    </>
  );
}
