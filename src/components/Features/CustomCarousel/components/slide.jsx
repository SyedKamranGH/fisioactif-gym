import React from "react";
import clsx from "clsx";

const Slide = ({ children, variant, selected, variableWidth }) => {
  return (
    <div
      className={clsx(
        "embla__slide shrink-0",
        variableWidth
          ? "max-w-max basis-auto"
          : "basis-[80%] sm:basis-[50%] md:basis-[33.33%] lg:basis-[25%]",
        "flex items-stretch justify-center transition-all duration-500",

        selected ? "scale-[1.02]" : "scale-[0.98]",

        variant === "largeShadow" &&
          "rounded-2xl border border-gray-200 bg-white text-black shadow-2xl",
        variant === "dark" &&
          "rounded-xl border border-neutral-700 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white shadow-lg",
        variant === "light" &&
          "rounded-xl border border-gray-300 bg-gradient-to-br from-white to-gray-100 text-black shadow-md",
        variant === "banner" && "w-full overflow-hidden rounded-none shadow-md",
        variant === "image" && "bg-transparent shadow-none transition-transform hover:scale-105",
        variant === "testimonial" &&
          "rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-md dark:border-neutral-700 dark:bg-neutral-900"
      )}
    >
      <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Slide;
