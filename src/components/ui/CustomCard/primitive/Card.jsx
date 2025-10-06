"use client";
import React from "react";
import { Card as RadixCard } from "@radix-ui/themes";
import cls from "../styles/Card.module.css";

function Card({ as: Tag = "div", className = "", size = "medium", children }) {
  const sizeClass =
    size === "small" ? cls.cardSmall : size === "large" ? cls.cardLarge : cls.cardMedium;
  const radixSize = size === "small" ? "1" : size === "large" ? "3" : "2";

  return (
    <Tag className={`${cls.cardBase} ${sizeClass} ${className}`}>
      <RadixCard size={radixSize}>{children}</RadixCard>
    </Tag>
  );
}

export default Card;
