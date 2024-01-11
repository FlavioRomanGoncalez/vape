// COMPONENT
import Table from "./Table/main";

// STYLE
import styles from "./main.module.css";

export default function List() {
  return (
    <main className={`${styles.container} animate__animated animate__fadeInUp`}>
      <h1 className={styles.title}>LISTA CLIENTES</h1>
      <div className={styles.table}>
        <h2 className={styles.subtitle}>LISTA</h2>
        <Table />
      </div>
    </main>
  );
}
