import Button from "../Button/Button";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.hero_title}>
        Монетизируйте клиентскую базу, не снижая NPS
      </h1>
      <p className={styles.hero_text}>
        Найдите идеальный баланс выручки и удовлетворённости пользователей
        с платформой рекламной монетизации
      </p>
      <Button color="orange">Заказать звонок</Button>
    </section>
  );
};

export default Hero;
