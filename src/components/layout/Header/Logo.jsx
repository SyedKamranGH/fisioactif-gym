"use client";
import React from "react";
import Image from "next/image";

const Logo = ({ className = "" }) => {
  return (
    <div className={`ml-2 flex-shrink-0 ${className}`}>
      <Image
        src="/Logo_fisioactif-280x334.jpg"
        alt="Fisio Actif Logo"
        width={50}
        height={50}
        className="rounded-full object-cover"
        priority
      />
    </div>
  );
};

export default Logo;
