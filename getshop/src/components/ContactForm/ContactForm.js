import styles from "./ContactForm.module.css";
import Button from "../Button/Button";

const ContactForm = () => {
  return (
    <section className={styles.form_wrapper}>
      <div className={styles.form}>
        <h1 className={styles.form_title}>Заполните форму</h1>
        <div className={styles.form_input_block}>
          <textarea
            className={styles.form_textarea}
            placeholder="Напишите свой вопрос"
          ></textarea>
          <div className={styles.inputs}>
            <input
              type="text"
              className={styles.form_input}
              placeholder="Введите e-mail"
            />
            <div className={styles.form_checkbox}>
              <input type="checkbox" id="form_checkbox" />
              <label htmlFor="form_checkbox">
                Я ознакомлен(а) с{" "}
                <a href="#" style={{ textDecoration: "underline" }}>
                  политикой конфиденциальности
                </a>
                и согласен(на) на обработку{" "}
                <a href="#" style={{ textDecoration: "underline" }}>
                  персональных данных
                </a>
              </label>
            </div>
            <Button color="secondary">Отправить</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
