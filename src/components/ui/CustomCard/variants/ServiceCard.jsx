import React from "react";
import Card from "../primitive/Card";
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
  size = "medium",
  className = "",
}) {
  const featured = variant === "featured";
  const rootClass = `${styles.serviceCard} ${featured ? styles.featured : styles.standard} ${
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
    <Card size={size} className={rootClass}>
      <div className={styles.iconWrapper}>{icon}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {description ? <p className={styles.description}>{description}</p> : null}
        <div className={styles.buttonWrapper}>{ButtonEl}</div>
      </div>
    </Card>
  );
}

export default ServiceCard;
