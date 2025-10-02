"use client";
import React from "react";

const NavigationLinks = ({ items, className = "" }) => {
  return (
    <nav className={`items-center space-x-6 ${className}`}>
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`text-base font-medium transition-colors duration-200 ${
            item.active
              ? "text-primary border-primary border-b-2 pb-1"
              : "hover:text-primary text-neutral-700"
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default NavigationLinks;
