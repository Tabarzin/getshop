import Button from "../Button/Button";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h0 className={styles.hero_title}>
        Монетизируйте клиентскую базу, не снижая NPS
      </h0>
      <p className={styles.hero_text}>
        Найдите идеальный баланс выручки и удовлетворённости пользователей
        с платформой рекламной монетизации
      </p>
      <Button color="orange">Заказать звонок</Button>
    </section>
  );
};

export default Hero;
