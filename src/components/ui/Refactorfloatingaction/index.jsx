"use client";
import React from "react";
import { Button } from "@radix-ui/themes";
import styles from "./Refactorfloatingaction.module.css";

const Refactorfloatingaction = ({
  icon,
  label, 
  onClick,
  disabled = false,
  size = "large",
  variant,
  ...rest
}) => {
  const variantClass =
    {
      green: styles.fabGreen,
      blue: styles.fabBlue,
    }[variant] || styles.fabBlue;

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.fabButton} ${variantClass}`}
      size={size}
      {...rest}
    >
      <span className={styles.iconWrapper}>{icon}</span>
      {label && <span className={styles.label}>{label}</span>}
    </Button>
  );
};

export default Refactorfloatingaction;