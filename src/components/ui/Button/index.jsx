"use client";
import React from "react";
import { Button } from "@radix-ui/themes";
import { Search } from "lucide-react";
import clsx from "clsx";

import styles from "./Button.module.css";

const CustomButton = ({
  label,
  icon,
  onClick,
  variant = "slanted",
  size,
  color = "red",
  ...rest
}) => {
  const content =
    variant === "slanted" ? (
      <span>{label}</span>
    ) : (
      <span className={styles.iconWrapper}>{icon || <Search size={20} />}</span>
    );

  const buttonClass = clsx(
    styles.Button,
    variant === "slanted" && styles["Button--slanted"],
    variant === "search" && styles["Button--search"],
    variant === "social" && styles["Button--social"]
  );

  return (
    <Button onClick={onClick} className={buttonClass} size={size} color={color} {...rest}>
      {content}
    </Button>
  );
};

export default CustomButton;
