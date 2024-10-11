import styles from "./page.module.css";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <Header />

            <Hero />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
