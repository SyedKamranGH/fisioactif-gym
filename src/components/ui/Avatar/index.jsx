"use client";

import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { motion } from "framer-motion";
import clsx from "clsx";

const sizeMap = {
  sm: 40,
  md: 60,
  lg: 80,
};

const Avatar = ({
  src,
  alt = "User avatar",
  initials = "U",
  size = "md",
  borderColor = "white",
  variant = "animated",
  delay = 0,
  duration = 3,
  className,
  style,
  ...props
}) => {
  const pixelSize = typeof size === "number" ? size : sizeMap[size] || 60;

  const motionProps =
    variant === "animated"
      ? {
          animate: { y: [0, -10, 0] },
          transition: {
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }
      : {};

  return (
    <motion.div
      className={clsx("absolute", className)}
      style={{
        width: pixelSize,
        height: pixelSize,
        ...style,
      }}
      {...motionProps}
    >
      <AvatarPrimitive.Root
        className="relative flex items-center justify-center overflow-hidden rounded-full border-2 shadow-lg"
        style={{
          width: "100%",
          height: "100%",
          borderColor,
        }}
        {...props}
      >
        <AvatarPrimitive.Image src={src} alt={alt} className="h-full w-full object-cover" />
        <AvatarPrimitive.Fallback
          className="flex items-center justify-center bg-gray-200 font-semibold text-gray-700"
          delayMs={500}
        >
          {initials}
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
    </motion.div>
  );
};

export default Avatar;
