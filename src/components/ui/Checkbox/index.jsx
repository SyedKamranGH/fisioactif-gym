"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import clsx from "clsx";
import React from "react";

const CustomCheckbox = ({
  id,
  checked,
  onCheckedChange,
  label,
  variant = "primary",
  size = "medium",
  color,
  disabled = false,
  className,
}) => {
  const sizeClasses = {
    small: "h-4 w-4",
    medium: "h-5 w-5",
    large: "h-6 w-6",
  };

  const baseBorderColor =
    variant === "primary"
      ? "border-[#E31E3F]"
      : variant === "secondary"
        ? "border-neutral-500"
        : "border-gray-400";

  const dynamicStyle = color
    ? {
        borderColor: color,
        backgroundColor: checked ? color : "transparent",
      }
    : {};

  return (
    <label
      htmlFor={id}
      className={clsx(
        "flex cursor-pointer items-center gap-2",
        disabled && "cursor-not-allowed opacity-60",
        className
      )}
    >
      <CheckboxPrimitive.Root
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        style={dynamicStyle}
        className={clsx(
          "flex items-center justify-center rounded-[2px] border-2 transition-colors duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          sizeClasses[size],
          !color && baseBorderColor,
          !color && "data-[state=checked]:border-[#E31E3F] data-[state=checked]:bg-[#E31E3F]"
        )}
      >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
          <Check className="h-3 w-3" strokeWidth={3} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {label && <span className="text-sm font-medium text-neutral-800">{label}</span>}
    </label>
  );
};

export default CustomCheckbox;
