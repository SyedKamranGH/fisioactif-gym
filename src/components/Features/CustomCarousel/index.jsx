"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import Controls from "./components/control";
import Slide from "./components/slide";

const VARIANT_STYLES = {
  default: "gap-4 sm:gap-6",
  card: "gap-4 sm:gap-6",
  banner: "gap-0",
  variable: "gap-3 sm:gap-5",
  testimonial: "gap-6 sm:gap-8",
};

const CustomCarousel = ({
  children,
  type = "card",
  variant = "default",
  loop = true,
  autoplay = false,
  autoplayInterval = 5000,
  variableWidth = false,
  align = "center",
  slidesToScroll = 1,
  className,
  showControls = true,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      align,
      containScroll: "trimSnaps",
      slidesToScroll,
      skipSnaps: false,
      watchSlides: true,
    },
    []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!autoplay || !emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), autoplayInterval);
    return () => clearInterval(interval);
  }, [emblaApi, autoplay, autoplayInterval]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className={clsx("relative w-full", className)}>
      <div className="embla overflow-hidden px-4 sm:px-6" ref={emblaRef}>
        <div
          className={clsx(
            "embla__container flex items-stretch",
            VARIANT_STYLES[type] || VARIANT_STYLES.default
          )}
        >
          {React.Children.map(children, (child, index) =>
            React.cloneElement(child, {
              key: index,
              variant,
              index,
              selected: selectedIndex === index,
              variableWidth,
            })
          )}
        </div>
      </div>

      {showControls && (
        <Controls
          onPrev={scrollPrev}
          onNext={scrollNext}
          slidesCount={React.Children.count(children)}
          selectedIndex={selectedIndex}
        />
      )}
    </div>
  );
};

CustomCarousel.Slide = Slide;
CustomCarousel.Controls = Controls;

export default CustomCarousel;
