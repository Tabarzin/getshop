import styles from "./Balance.module.css";

const Balance = () => {
  return (
    <section className={styles.balance}>
      <h1 className={styles.balance_title}>
        Баланс между выручкой и удовлетворённостью пользователей
      </h1>

      <div className={styles.balance_text_block}>
        <div className={styles.text_column}>
          <h2 className={styles.text_column_title}>
            Частотность под контролем
          </h2>
          <p className={styles.text_column_text}>
            Чтобы не ронять NPS и не увеличивать отток пользователей
          </p>
        </div>
        <div className={styles.text_column}>
          {" "}
          <h2 className={styles.text_column_title}>Максимальная выручка</h2>
          <p className={styles.text_column_text}>
            За счёт заполенения всех рекламных мест по высокой цене
          </p>
        </div>
      </div>
    </section>
  );
};

export default Balance;
