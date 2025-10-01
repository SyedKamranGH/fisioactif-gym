"use client";
import React from "react";
import { Button } from "@radix-ui/themes";
import styles from "./Button.module.css";

const CustomButton = ({
  label = "Consulta",
  onClick,
  icon,              
  variant = "slanted",
  size,
  color,
  buttonVariant,
  ...rest           
}) => {
  return (
    <Button
      onClick={onClick}
      className={
        variant === "search" ? styles.slantedSearchButton : styles.slantedButton
      }
      size={size}
      variant={buttonVariant}
      color={color}
      {...rest}
    >
      {icon && React.isValidElement(icon) && (
        <span className={styles.iconWrapper}>{icon}</span>
      )}

      {variant !== "search" && label}
    </Button>
  );
};

export default CustomButton;