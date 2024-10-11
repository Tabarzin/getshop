import styles from "./Button.module.css";

const Button = ({ color = "orange", children }) => {
  const buttonClass = `${styles.button} ${styles[color] || styles.orange}`;

  return <button className={buttonClass}>{children}</button>;
};

export default Button;
