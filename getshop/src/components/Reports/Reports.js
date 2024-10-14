import styles from "./Reports.module.css";
import Image from "next/image";
// import laptop from "../../assets/images/laptop.png";
// import laptop_320 from "../../assets/images/laptop_320.png";
import Button from "../Button/Button";
// import arrow from "../../assets/icons/arrow.svg";

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
                src="/assets/icons/arrow.svg"
                alt="Arrow Icon"
                className={styles.arrowIcon}
                width={24}
                height={24}
              />
              Выручка, CTR, показы и другие показатели в реальном времени.
            </li>
            <li className={styles.list_item}>
              <Image
                src="/assets/icons/arrow.svg"
                alt="Arrow Icon"
                className={styles.arrowIcon}
                width={24}
                height={24}
              />
              Инструменты контроля качества трафика.
            </li>
            <li className={styles.list_item}>
              <Image
                src="/assets/icons/arrow.svg"
                alt="Arrow Icon"
                className={styles.arrowIcon}
                width={24}
                height={24}
              />
              Ежемесячные автоматические отчёты для каждого правообладателя.
            </li>
          </ul>
          <Button color="secondary">Заказать звонок</Button>
        </div>
      </div>
      <Image
        src="/assets/images/laptop.png"
        alt="Laptop Logo"
        className={styles.laptop}
        width={721}
        height={482}
      />
      <Image
        src="/assets/images/laptop_320.png"
        alt="Laptop Small Logo"
        className={styles.laptop_320}
        width={501}
        height={335}
      />
    </section>
  );
};

export default Reports;
