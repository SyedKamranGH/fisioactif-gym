"use client";
import React from "react";
import cls from "../styles/Card.module.css";

function Card({ as: Tag = "div", className = "", size = "small", children }) {
  const sizeClass =
    size === "small" ? cls.cardSmall : size === "large" ? cls.cardLarge : cls.cardMedium;

  return (
    <Tag className={`${cls.cardBase} ${sizeClass} ${className}`} style={{ overflow: "visible" }}>
      {children}
    </Tag>
  );
}

export default Card;
