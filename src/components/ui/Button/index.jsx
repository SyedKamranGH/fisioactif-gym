"use client";
import React from "react";
import { Button } from "@radix-ui/themes";
import { Search } from "lucide-react";
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
  const renderIcon = variant === "search" ? icon || <Search /> : null;

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
      {variant === "search" && React.isValidElement(renderIcon) && (
        <span className={styles.iconWrapper}>{renderIcon}</span>
      )}

      {variant !== "search" && <span className={styles.label}>{label}</span>}
    </Button>
  );
};

export default CustomButton;
