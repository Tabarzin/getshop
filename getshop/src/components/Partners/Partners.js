import Image from "next/image";
import styles from "./Partners.module.css";
import clickwave from "../../assets/images/clickwave.png";
import nova from "../../assets/images/novasphere.png";
import zy from "../../assets/images/zypth.png";

const Partners = () => {
  return (
    <section className={styles.partners_wrapper}>
      <div className={styles.partners}>
        <h2 className={styles.partners_title}>Наши партнёры по монетизации</h2>

        <div className={styles.logos}>
          <Image
            src={clickwave}
            alt="Clickwave Logo"
            className={styles.clickwave}
          />
          <Image src={zy} alt="Zypth Logo" className={styles.zy} />
          <Image src={nova} alt="Novasphere Logo" className={styles.nova} />
        </div>
      </div>
    </section>
  );
};

export default Partners;
