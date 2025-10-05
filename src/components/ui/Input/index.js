"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import styles from "./InputVariant.module.css";

export default function InputField({
  type = "text",
  placeholder = "Type here…",
  value: propValue,
  onChange: propOnChange,
  buttonText = "Subscribe",
  onSubmit = () => {},
  ...rest
}) {
  const [value, setValue] = useState(propValue || "");
  const [expanded, setExpanded] = useState(false);

  const handleChange = (e) => {
    if (propOnChange) {
      propOnChange(e);
    } else {
      setValue(e.target.value);
    }
  };

  const inputField = (
    <input
      type="text"
      value={propValue !== undefined ? propValue : value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`px-4 py-2 focus:outline-none 
        ${type === "underline" ? "border-black-300 border-b" : "rounded-full border border-gray-300"}
        ${type === "search" && !expanded ? "w-0 px-0 opacity-0" : "w-full"}
        ${styles.slanted}`}
      {...rest}
    />
  );

  if (type === "search") {
    return (
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="rounded-full p-2 hover:bg-gray-100"
        >
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />
        </button>
        {expanded && <div className="flex-1 transition-all duration-300">{inputField}</div>}
      </div>
    );
  }

  if (type === "subscribe") {
    return (
      <div className="flex items-center gap-2">
        {inputField}
        <button
          onClick={() => onSubmit(propValue || value)}
          className="rounded-full bg-blue-600 px-4 py-2 text-white"
        >
          {buttonText}
        </button>
      </div>
    );
  }

  if (type === "underline" || type === "text") {
    return <div className="full">{inputField}</div>;
  }

  return null;
}
