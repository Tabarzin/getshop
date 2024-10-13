import styles from "./Reports.module.css";
import Image from "next/image";
import laptop from "../../assets/images/laptop.png";
import Button from "../Button/Button";
import arrow from "../../assets/icons/arrow.svg";

const Reports = () => {
  return (
    <section className={styles.reports_wrapper}>
      <div className={styles.reports}>
        <div className={styles.reports_text_block}>
          <h2 className={styles.reports_title}>
            Подробные отчёты для вас и правообладателей
          </h2>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <Image
                src={arrow}
                alt="Arrow Icon"
                className={styles.arrowIcon}
              />
              Выручка, CTR, показы и другие показатели в реальном времени.
            </li>
            <li className={styles.list_item}>
              <Image
                src={arrow}
                alt="Arrow Icon"
                className={styles.arrowIcon}
              />
              Инструменты контроля качества трафика.
            </li>
            <li className={styles.list_item}>
              <Image
                src={arrow}
                alt="Arrow Icon"
                className={styles.arrowIcon}
              />
              Ежемесячные автоматические отчёты для каждого правообладателя.
            </li>
          </ul>
          <Button color="secondary">Заказать звонок</Button>
        </div>
        <Image src={laptop} alt="Laptop Logo" className={styles.laptop} />
      </div>
    </section>
  );
};

export default Reports;
