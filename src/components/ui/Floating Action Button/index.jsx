"use client";
import React from "react";
import { Button } from "@radix-ui/themes";
import styles from "./FloatingActionButton.module.css";

const FloatingActionButton = ({
  icon,
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
      {icon && <span className={styles.iconWrapper}>{icon}</span>}
    </Button>
  );
};

export default FloatingActionButton;
