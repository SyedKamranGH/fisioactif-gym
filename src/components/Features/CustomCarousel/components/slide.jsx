import React from "react";
import clsx from "clsx";

const Slide = ({ type = "card", children }) => {
  if (type === "variable") {
    return (
      <div
        className={clsx(
          "embla__slide relative shrink-0 overflow-hidden rounded-3xl",
          "w-auto max-w-[500px]"
        )}
      >
        <div className="flex h-full items-center justify-center">{children}</div>
      </div>
    );
  }
  if (type === "testimonial") {
    return (
      <div
        className={clsx(
          "embla__slide flex w-full shrink-0 items-center justify-center overflow-hidden"
        )}
      >
        <div className="w-full rounded-3xl bg-white p-8 text-center shadow-lg md:p-12">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "embla__slide mx-3 mt-5 w-[280px] shrink-0 overflow-hidden rounded-2xl bg-white shadow-md sm:mx-4 sm:w-[340px] md:w-[380px]"
      )}
    >
      {children}
    </div>
  );
};

export default Slide;
