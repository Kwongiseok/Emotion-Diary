import React from "react";
import styles from "./preViewCard.module.css";
const PreViewCard = ({
  cardInfo: { weather, day, id, emotion, title, imageURL },
}) => (
  <div className={styles.preViewCard}>
    <header className={styles.header}>
      <h3
        className={styles.header__title}
      >{`${weather} ${day} ${id} ${emotion}`}</h3>
    </header>
    <div className={styles.body}>
      {imageURL ? (
        <img src={imageURL} alt="imageURL" className={styles.image} />
      ) : (
        <div className={styles.noImage}>
          <span className={styles.noImage__title}>{title}</span>
        </div>
      )}
    </div>
  </div>
);

export default PreViewCard;
