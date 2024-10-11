import styles from "./Reports.module.css";
import Image from "next/image";
import laptop from "../../assets/images/laptop.png";
import Button from "../Button/Button";

const Reports = () => {
  return (
    <section className={styles.reports_wrapper}>
      <div className={styles.reports}>
        <div className={styles.reports_text_block}>
          <h2 className={styles.reports_title}>
            Подробные отчёты для вас и правообладателей
          </h2>
          <ul className={styles.list}>
            <li>
              Выручка, CTR, показы и другие показатели в реальном времени.
            </li>
            <li>Инструменты контроля качества трафика.</li>
            <li>
              Ежемесячные автоматические отчёты для каждого правообладателя.
            </li>
          </ul>
          <Button color="secondary">Заказать звонок</Button>
        </div>
        <Image src={laptop} alt="Laptop Logo" width={720} height={480} />
      </div>
    </section>
  );
};

export default Reports;
