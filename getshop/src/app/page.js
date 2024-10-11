"use client";

import styles from "./page.module.css";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import TabsBlock from "@/components/TabsBlock/TabsBlock";
import Balance from "../components/Balance/Balance";
import Partners from "../components/Partners/Partners";
import Reports from "../components/Reports/Reports";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Header />

            <Hero />
            <TabsBlock />
          </div>
          <Balance />
          <Partners />
          <Reports />
        </div>
      </main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
