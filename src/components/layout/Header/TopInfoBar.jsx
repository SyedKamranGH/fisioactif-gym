"use client";
import React from "react";
import { Mail, Clock, Phone } from "lucide-react";

const TopInfoBar = () => {
  const contactInfo = [
    {
      icon: Mail,
      text: "info@fisioactif.pt",
      className: "ms-10 flex items-center gap-2",
    },
    {
      icon: Clock,
      text: "Horário 09:00H - 20:00H",
      className: "flex items-center gap-2",
    },
    {
      icon: Phone,
      text: "+351 123 456 789",
      className: "flex items-center gap-2",
    },
  ];

  return (
    <div className="bg-neutral-100 px-4 py-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between text-sm">
        <div className={contactInfo[0].className}>
          {React.createElement(contactInfo[0].icon, { className: "text-primary h-4 w-4" })}
          <span className="text-neutral-700">{contactInfo[0].text}</span>
        </div>
        <div className="flex items-center gap-6">
          {contactInfo.slice(1).map((item, index) => (
            <div key={index} className={item.className}>
              {React.createElement(item.icon, { className: "text-primary h-4 w-4" })}
              <span className="text-neutral-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
