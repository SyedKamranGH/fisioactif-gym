"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Slot } from "@radix-ui/react-slot";
import styles from "./labels.module.css";

const Label = ({
  asChild = false,
  label = "Default Label",
  sublabel = "",
  color = "red",
  size = "md",
  icon,
  onClick,
  motion: enableMotion = false,
  buzzIcon = false,
  variant = "default",
}) => {
  const Component = asChild ? Slot : "button";
  const isImage = typeof icon === "string";

  const floatVariants = {
    animate: {
      y: [0, -6, 3, -3, 0],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const buzzVariants = {
    buzz: {
      x: [0, -2, 2, -2, 2, 0],
      rotate: [0, -3, 3, -3, 3, 0],
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1.8,
      },
    },
  };

  const Wrapper = enableMotion ? motion.div : React.Fragment;
  const motionProps = enableMotion
    ? { variants: floatVariants, animate: "animate", className: styles.motionWrapper }
    : {};

  const renderIcon = () => {
    if (!icon) return null;
    const content = isImage ? (
      <Image src={icon} alt={label} width={20} height={20} />
    ) : (
      React.createElement(icon, { size: 20 })
    );
    return buzzIcon ? (
      <motion.span variants={buzzVariants} animate="buzz">
        {content}
      </motion.span>
    ) : (
      content
    );
  };

  if (variant === "section") {
    return (
      <Wrapper {...motionProps}>
        <div className={styles.sectionContainer}>
          <div className={styles.slantedLines}>
            <div className={`${styles.line} ${styles.lineOne}`} />
          </div>
          <div className={styles.slantedLines}>
            <div className={`${styles.line} ${styles.lineTwo}`} />
          </div>
          <div className={styles.sectionText}>
            {sublabel && <span className={styles.subLabelText}>{sublabel}</span>}
            <span className={styles.sectionMainLabel}>{label}</span>
          </div>
        </div>
      </Wrapper>
    );
  }

  if (variant === "call") {
    return (
      <div className={styles.labelContainer}>
        <Wrapper {...motionProps}>
          <Component
            onClick={onClick}
            className={`${styles.slantedWrapper} ${styles[`size-${size}`]} ${onClick ? "group" : ""}`}
          >
            <div className={`${styles.leftStrip} ${styles.forceVisible}`} data-color={color}></div>
            <div className={styles.slantedContent}>
              {icon && <span className={styles.iconWrap}>{renderIcon()}</span>}
            </div>
          </Component>
        </Wrapper>

        <div className={styles.textBlock}>
          {sublabel && <span className={styles.subLabelText}>{sublabel}</span>}
          <span className={styles.mainLabelText}>{label}</span>
        </div>
      </div>
    );
  }

  return (
    <Wrapper {...motionProps}>
      <Component
        onClick={onClick}
        className={`${styles.slantedWrapper} ${styles[`size-${size}`]} ${onClick ? "group" : ""}`}
      >
        <div className={`${styles.leftStrip} ${styles.forceVisible}`} data-color={color}></div>
        <div className={styles.slantedContent}>
          {icon && <span className={styles.iconWrap}>{renderIcon()}</span>}
          <span>{label}</span>
        </div>
      </Component>
    </Wrapper>
  );
};

export default Label;
