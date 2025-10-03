"use client";

import React from "react";
import clsx from "clsx";

const SectionLayout = ({
  children,
  backgroundImage = "",
  overlayColor = "bg-black/30",
  padding = "py-16",
  height = "min-h-[400px]",
  className = "",
}) => {
  return (
    <section
      className={clsx(
        "relative flex w-full items-center justify-center",
        padding,
        height,
        className
      )}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {overlayColor && (
        <div className={clsx("absolute inset-0", overlayColor)} aria-hidden="true" />
      )}

      <div className="relative z-10 w-full px-4">{children}</div>
    </section>
  );
};

export default SectionLayout;
