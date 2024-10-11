"use client";

import styles from "./TabsBlock.module.css";
import Tabs from "../Tabs/Tabs";

const TabsBlock = () => {
  return (
    <section className={styles.tabsblock}>
      <h1 className={styles.tabsblock_text}>
        Дополнительные источники выручки для разных компаний
      </h1>
      <Tabs />
    </section>
  );
};

export default TabsBlock;
