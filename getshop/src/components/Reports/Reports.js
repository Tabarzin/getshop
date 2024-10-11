import styles from "./Reports.module.css";
import Image from "next/image";
import laptop from "../../assets/images/laptop.png";

const Reports = () => {
  return (
    <section className={styles.reports}>
      <div className={styles.reports_text_block}>
        <h2 className={styles.reports_title}>
          Подробные отчёты для вас и правообладателей
        </h2>
        <ul className={styles.list}>
          <li>Выручка, CTR, показы и другие показатели в реальном времени.</li>
          <li>Инструменты контроля качества трафика.</li>
          <li>
            Ежемесячные автоматические отчёты для каждого правообладателя.
          </li>
        </ul>
      </div>
      <Image src={laptop} alt="Laptop Logo" width={720} height={480} />
    </section>
  );
};

export default Reports;
