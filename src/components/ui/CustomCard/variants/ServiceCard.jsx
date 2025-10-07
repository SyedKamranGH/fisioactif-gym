import React from "react";
import cardCls from "../styles/Card.module.css";
import styles from "../styles/ServiceCard.module.css";

function ServiceCard({
  icon,
  title,
  description,
  buttonText = "Ler Mais",
  onButtonClick,
  variant = "standard",
  iconPosition = "top",
  size = "small",
  className = "",
}) {
  const featured = variant === "featured";

  // Size classes
  const sizeClass =
    size === "small"
      ? cardCls.cardSmall
      : size === "large"
        ? cardCls.cardLarge
        : cardCls.cardMedium;

  const rootClass = `${styles.serviceCard} ${sizeClass} ${featured ? styles.featured : styles.standard} ${
    iconPosition === "left" ? styles.iconLeft : ""
  } ${className}`;

  const ButtonEl = (
    <button
      type="button"
      className={featured ? cardCls.slantedButtonOutline : cardCls.slantedButtonPrimary}
      onClick={onButtonClick}
    >
      {buttonText}
    </button>
  );

  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconWrapper}>{icon}</div>
      <div className={rootClass}>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          {description ? <p className={styles.description}>{description}</p> : null}
          <div className={styles.buttonWrapper}>{ButtonEl}</div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
