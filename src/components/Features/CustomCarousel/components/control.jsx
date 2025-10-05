"use client";
import React from "react";
import clsx from "clsx";
import CustomButton from "@/components/ui/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Controls = ({ onPrev, onNext, slidesCount = 0, selectedIndex = 0 }) => (
  <div className="mt-8 flex items-center justify-center gap-6">
    <CustomButton
      variant="search"
      color="red"
      size="sm"
      icon={<ArrowLeft size={16} />}
      onClick={onPrev}
      aria-label="Previous Slide"
    />

    <div className="flex gap-3">
      {Array.from({ length: slidesCount }).map((_, i) => (
        <span
          key={i}
          className={clsx(
            "text-sm font-semibold transition-all duration-300",
            i === selectedIndex ? "scale-110 text-red-500" : "text-white/60"
          )}
        >
          {String(i + 1).padStart(2, "0")}
        </span>
      ))}
    </div>

    <CustomButton
      variant="search"
      color="red"
      size="sm"
      icon={<ArrowRight size={16} />}
      onClick={onNext}
      aria-label="Next Slide"
    />
  </div>
);

export default Controls;
