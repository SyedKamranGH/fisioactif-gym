// SectionLayout.js
"use client";

import React from "react";
import { Box, Section, Container } from "@radix-ui/themes";
import clsx from "clsx";

const SectionLayout = ({
  children,
  backgroundImage = "",
  overlayColor = "",
  padding = "py-16",
  height = "min-h-[400px]",
  className = "",
}) => {
  return (
    <Box
      asChild
      className={clsx(
        "relative flex w-full items-center justify-center",
        padding,
        height,
        className
      )}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Section size="3" className="w-full">
        {overlayColor && (
          <Box
            className="absolute inset-0"
            style={{ backgroundColor: overlayColor }}
            aria-hidden="true"
          />
        )}

        <Container
          size="4"
          className="relative z-10 flex h-full flex-col items-center justify-center text-center"
        >
          {children}
        </Container>
      </Section>
    </Box>
  );
};

export default SectionLayout;
