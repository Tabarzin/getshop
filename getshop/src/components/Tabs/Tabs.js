"use client";

import styles from "./Tabs.module.css";
import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("ott");

  return (
    <section className={styles.tabs_container}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab_button} ${
            activeTab === "operators" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("operators")}
        >
          Операторам
        </button>
        <button
          className={`${styles.tab_button} ${
            activeTab === "ott" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("ott")}
        >
          ОТТ сервисам
        </button>
      </div>

      <div className={styles.tab_content}>
        {activeTab === "ott" && (
          <p>
            Найдите идеальный баланс выручки и удовлетворённости пользователей с
            платформой рекламной монетизации
          </p>
        )}
        {activeTab === "operators" && (
          <p>
            Дополнительные возможности обогащения данных об аудитории и
            монетизации
          </p>
        )}
      </div>
    </section>
  );
};

export default Tabs;
