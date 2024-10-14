import Image from "next/image";
import styles from "./Partners.module.css";
// import clickwave from "../../assets/images/clickwave.png";
// import nova from "../../assets/images/novasphere.png";
// import zy from "../../assets/images/zypth.png";

const Partners = () => {
  return (
    <section className={styles.partners_wrapper}>
      <div className={styles.partners}>
        <h2 className={styles.partners_title}>Наши партнёры по монетизации</h2>

        <div className={styles.logos}>
          <Image
            src="/assets/images/clickwave.png"
            alt="Clickwave Logo"
            className={styles.clickwave}
            width={177}
            height={54}
          />
          <Image
            src="/assets/images/zypth.png"
            alt="Zypth Logo"
            className={styles.zy}
            width={102}
            height={70}
          />
          <Image
            src="/assets/images/novasphere.png"
            alt="Novasphere Logo"
            className={styles.nova}
            width={191}
            height={60}
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
