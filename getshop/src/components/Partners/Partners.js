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

        <Image src={clickwave} alt="Clickwave Logo" width={177} height={54} />
        <Image src={zy} alt="Zypth Logo" width={102} height={70} />
        <Image src={nova} alt="Novasphere Logo" width={191} height={60} />
      </div>
    </section>
  );
};

export default Partners;
