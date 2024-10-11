"use client";

import styles from "./TabsBlock.module.css";
import Tabs from "../Tabs/Tabs";

const TabsBlock = () => {
  return (
    <section className={styles.tabsblock}>
      <p className={styles.tabsblock_text}>
        Дополнительные источники выручки для разных компаний
      </p>
      <Tabs />
    </section>
  );
};

export default TabsBlock;
