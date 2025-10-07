"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CustomButton from "@/components/ui/Button";

const Controls = ({
  onPrev,
  onNext,
  onSelectSlide,
  slidesCount = 0,
  selectedIndex = 0,
  type = "default",
}) => {
  const renderNumbers = () => (
    <div className="flex items-center gap-3 sm:gap-4">
      {Array.from({ length: slidesCount }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelectSlide && onSelectSlide(i)} // ✅ scrolls to clicked index
          className={`text-sm font-semibold tracking-widest transition-colors duration-300 sm:text-base ${
            i === selectedIndex ? "text-red-500" : "text-white/70 hover:text-white/90"
          }`}
        >
          {String(i + 1).padStart(2, "0")}
        </button>
      ))}
    </div>
  );

  switch (type) {
    case "card":
      return (
        <div className="absolute -top-10 right-0 flex items-center gap-3 sm:gap-4">
          <CustomButton
            variant="search"
            color="red"
            size="sm"
            icon={<ChevronLeft size={16} />}
            onClick={onPrev}
          />
          {renderNumbers()}
          <CustomButton
            variant="search"
            color="red"
            size="sm"
            icon={<ChevronRight size={16} />}
            onClick={onNext}
          />
        </div>
      );

    case "variable":
      return (
        <div className="mt-6 flex items-center gap-3 sm:gap-4">
          <CustomButton
            variant="search"
            color="red"
            size="sm"
            icon={<ChevronLeft size={16} />}
            onClick={onPrev}
          />
          {renderNumbers()}
          <CustomButton
            variant="search"
            color="red"
            size="sm"
            icon={<ChevronRight size={16} />}
            onClick={onNext}
          />
        </div>
      );

    case "testimonial":
      return (
        <div className="relative flex w-full justify-center">
          <div className="mt-0 flex items-center gap-3 sm:gap-4">
            <CustomButton
              variant="search"
              color="red"
              size="sm"
              icon={<ChevronLeft size={16} />}
              onClick={onPrev}
            />
            {renderNumbers()}
            <CustomButton
              variant="search"
              color="red"
              size="sm"
              icon={<ChevronRight size={16} />}
              onClick={onNext}
            />
          </div>
        </div>
      );

    case "news":
      return (
        <div className="absolute right-4 top-0 flex items-center gap-3 sm:gap-4">
          <CustomButton
            variant="search"
            color="red"
            size="sm"
            icon={<ChevronLeft size={16} />}
            onClick={onPrev}
          />
          {renderNumbers()}
          <CustomButton
            variant="search"
            color="red"
            size="sm"
            icon={<ChevronRight size={16} />}
            onClick={onNext}
          />
          <CustomButton label="Show all" color="red" size="sm" />
        </div>
      );

    default:
      return (
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <CustomButton
            variant="search"
            color="red"
            size="sm"
            icon={<ChevronLeft size={16} />}
            onClick={onPrev}
          />
          {renderNumbers()}
          <CustomButton
            variant="search"
            color="red"
            size="sm"
            icon={<ChevronRight size={16} />}
            onClick={onNext}
          />
        </div>
      );
  }
};

export default Controls;
