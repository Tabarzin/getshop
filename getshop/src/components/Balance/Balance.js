import styles from "./Balance.module.css";

const Balance = () => {
  return (
    <section className={styles.balance_wrapper}>
      <div className={styles.balance}>
        <h1 className={styles.balance_title}>
          Баланс между выручкой и удовлетворённостью пользователей
        </h1>

        <div className={styles.balance_text_block}>
          <div className={styles.text_column}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="#FF5900" />
              <path
                d="M7.46967 15.4698C7.17678 15.7627 7.17678 16.2376 7.46967 16.5305C7.76256 16.8233 8.23744 16.8233 8.53033 16.5305L7.46967 15.4698ZM16.75 8.00012C16.75 7.58591 16.4142 7.25012 16 7.25012H9.25C8.83579 7.25012 8.5 7.58591 8.5 8.00012C8.5 8.41434 8.83579 8.75012 9.25 8.75012H15.25V14.7501C15.25 15.1643 15.5858 15.5001 16 15.5001C16.4142 15.5001 16.75 15.1643 16.75 14.7501V8.00012ZM8.53033 16.5305L16.5303 8.53045L15.4697 7.46979L7.46967 15.4698L8.53033 16.5305Z"
                fill="white"
              />
            </svg>
            <h2 className={styles.text_column_title}>
              Частотность под контролем
            </h2>
            <p className={styles.text_column_text}>
              Чтобы не ронять NPS и не увеличивать отток пользователей
            </p>
          </div>
          <div className={styles.image_wrapper}>
            <svg
              className={styles.leftLine}
              viewBox="0 0 227 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.218805 6C0.218805 9.19287 2.80713 11.7812 6 11.7812C9.19287 11.7812 11.7812 9.19287 11.7812 6C11.7812 2.80713 9.19287 0.218805 6 0.218805C2.80713 0.218805 0.218805 2.80713 0.218805 6ZM6 7.08397H227V4.91603H6V7.08397Z"
                fill="#FF5900"
              />
            </svg>

            <svg
              className={styles.upLine}
              width="12"
              height="59"
              viewBox="0 0 12 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0.666667C3.05448 0.666667 0.666666 3.05448 0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666666 6 0.666667ZM5 6L5 59L7 59L7 6L5 6Z"
                fill="#FF5900"
              />
            </svg>

            <div className={styles.orange_block}>
              <svg
                className={styles.orange_block_inner}
                viewBox="0 0 80 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_345)">
                  <path
                    d="M70.2185 9.40415C70.8663 10.7735 71.2549 12.3201 71.2549 14.0116V60.9883C71.2549 62.6638 70.8663 64.2103 70.2185 65.5797C75.2226 66.4174 79.9999 62.4543 79.9999 56.993V17.9908C79.9999 12.4973 75.2064 8.56643 70.2185 9.40415Z"
                    fill="white"
                  />
                  <path
                    opacity="0.8"
                    d="M70.2195 9.40416C68.0818 4.92558 62.9644 2.39632 57.9766 4.00731C59.7094 6.00495 60.7944 8.64699 60.7944 11.6434V63.3404C60.7944 66.3207 59.7094 68.9789 57.9928 70.9765C62.9968 72.5875 68.098 70.0421 70.2357 65.5797C70.8834 64.2103 71.2721 62.6477 71.2721 60.9883V14.0116C71.2721 12.3362 70.8834 10.7896 70.2357 9.40416H70.2195Z"
                    fill="white"
                  />
                  <path
                    opacity="0.4"
                    d="M22.8664 58.4106C18.7692 56.9446 16.0162 52.9654 16.0162 48.503V27.7372C16.0162 23.3875 18.6235 19.505 22.5749 17.9423L57.3603 4.21661C57.5708 4.13606 57.7652 4.08773 57.9757 4.02329C55.0121 0.591868 50.1538 -0.954691 45.5061 0.881848L7.20648 15.993C2.8664 17.7007 0 21.9859 0 26.7706V49.6146C0 54.5281 3.02834 58.8939 7.53036 60.521L45.8138 74.2628C50.3806 75.9061 55.0769 74.3434 57.9595 71.0086C57.8462 70.9764 57.749 70.9603 57.6356 70.9119L22.834 58.4267L22.8664 58.4106Z"
                    fill="white"
                  />
                  <path
                    opacity="0.6"
                    d="M60.7933 62.3406L39.9998 54.8665C36.6151 53.6421 34.3317 50.3396 34.3317 46.6504V29.4127C34.3317 25.8041 36.4856 22.5821 39.7568 21.2772L60.7933 12.9322V11.6595C60.7933 8.66305 59.7083 6.03712 57.9755 4.02338C57.7649 4.08782 57.5706 4.13615 57.3601 4.2167L22.5585 17.9585C18.607 19.5212 15.9998 23.4037 15.9998 27.7534V48.5192C15.9998 52.9816 18.7528 56.9447 22.85 58.4268L57.6516 70.912C57.7649 70.9443 57.8621 70.9765 57.9755 71.0087C59.7083 68.9949 60.7771 66.3529 60.7771 63.3726L60.7933 62.4019V62.3406Z"
                    fill="white"
                  />
                  <path
                    d="M34.3307 29.3967V46.6343C34.3307 50.3396 36.5979 53.6422 39.9987 54.8504L60.7922 62.3416V12.9323L39.7558 21.2772C36.4845 22.566 34.3307 25.8041 34.3307 29.4128V29.3967Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_345">
                    <rect
                      width="80"
                      height="74.8148"
                      fill="white"
                      transform="translate(0 0.0925903)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <svg
              className={styles.rightLine}
              viewBox="0 0 230 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M218.219 6.00002C218.219 9.19289 220.807 11.7812 224 11.7812C227.193 11.7812 229.781 9.19289 229.781 6.00002C229.781 2.80715 227.193 0.218825 224 0.218824C220.807 0.218824 218.219 2.80715 218.219 6.00002ZM-9.4764e-08 7.08397L224 7.08399L224 4.91605L9.4764e-08 4.91603L-9.4764e-08 7.08397Z"
                fill="#FF5900"
              />
            </svg>

            <svg
              className={styles.bottomLine}
              width="12"
              height="59"
              viewBox="0 0 12 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 47.6667C3.05448 47.6667 0.666669 50.0545 0.666669 53C0.666669 55.9455 3.05448 58.3333 6 58.3333C8.94552 58.3333 11.3333 55.9455 11.3333 53C11.3333 50.0545 8.94552 47.6667 6 47.6667ZM5 4.37114e-08L5 53L7 53L7 -4.37114e-08L5 4.37114e-08Z"
                fill="#FF5900"
              />
            </svg>
          </div>
          <div className={styles.text_column}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="#FF5900" />
              <path
                d="M7.46967 15.4698C7.17678 15.7627 7.17678 16.2376 7.46967 16.5305C7.76256 16.8233 8.23744 16.8233 8.53033 16.5305L7.46967 15.4698ZM16.75 8.00012C16.75 7.58591 16.4142 7.25012 16 7.25012H9.25C8.83579 7.25012 8.5 7.58591 8.5 8.00012C8.5 8.41434 8.83579 8.75012 9.25 8.75012H15.25V14.7501C15.25 15.1643 15.5858 15.5001 16 15.5001C16.4142 15.5001 16.75 15.1643 16.75 14.7501V8.00012ZM8.53033 16.5305L16.5303 8.53045L15.4697 7.46979L7.46967 15.4698L8.53033 16.5305Z"
                fill="white"
              />
            </svg>
            <h2 className={styles.text_column_title}>Максимальная выручка</h2>
            <p className={styles.text_column_text}>
              За счёт заполенения всех рекламных мест по высокой цене
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Balance;
