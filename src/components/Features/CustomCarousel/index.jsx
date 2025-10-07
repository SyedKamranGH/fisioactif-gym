"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import Controls from "./components/control";
import Slide from "./components/slide";

const VARIANT_STYLES = {
  card: "gap-4 sm:gap-6",
  variable: "gap-3 sm:gap-5",
  testimonial: "gap-0 sm:gap-0 w-full justify-center",
  news: "gap-6 sm:gap-8 justify-start",
  default: "gap-4 sm:gap-6",
};

const CustomCarousel = ({
  children,
  type = "card",
  loop = true,
  autoplay = false,
  autoplayInterval = 5000,
  align = "center",
  slidesToScroll = 1,
  showControls = true,
  className,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop,
      align,
      containScroll: "trimSnaps",
      slidesToScroll,
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
    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0);
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [emblaApi, autoplay, autoplayInterval]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className={clsx("relative w-full", className)}>
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div
          className={clsx(
            "embla__container flex items-stretch",
            VARIANT_STYLES[type] || VARIANT_STYLES.default
          )}
        >
          {React.Children.map(children, (child, index) =>
            React.cloneElement(child, {
              index,
              type,
              selected: selectedIndex === index,
            })
          )}
        </div>
      </div>

      {/* Controls */}
      {showControls && (
        <div className="mt-8 flex">
          <Controls
            onPrev={scrollPrev}
            onNext={scrollNext}
            onSelectSlide={scrollTo}
            slidesCount={React.Children.count(children)}
            selectedIndex={selectedIndex}
            type={type}
          />
        </div>
      )}
    </div>
  );
};

CustomCarousel.Slide = Slide;
CustomCarousel.Controls = Controls;

export default CustomCarousel;
