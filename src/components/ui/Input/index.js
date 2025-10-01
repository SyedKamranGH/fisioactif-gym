"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import styles from "./InputVariant.module.css";

export default function InputField({
	type = "search", 
	placeholder = "Type here…",
	buttonText = "Subscribe",
	onSubmit = () => {},
}) {
	const [value, setValue] = useState("");
	const [expanded, setExpanded] = useState(false);

	const inputField = (
		<input
			type="text"
			value={value}
			onChange={(e) => setValue(e.target.value)}
			placeholder={placeholder}
			className={`px-4 py-2 focus:outline-none 
                ${
									type === "underline"
										? "border-b border-black-300"
										: "rounded-full border border-gray-300"
								}
                ${type === "search" && !expanded ? "w-0 px-0 opacity-0" : "w-full"}
                ${styles.slanted}
              `}
		/>
	);

	if (type === "search") {
		return (
			<div className="flex items-center gap-2">
				<button
					type="button"
					onClick={() => setExpanded((prev) => !prev)}
					className="p-2 rounded-full hover:bg-gray-100"
				>
					<MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />
				</button>
				{expanded && (
					<div className="flex-1 transition-all duration-300">{inputField}</div>
				)}
			</div>
		);
	}

	if (type === "subscribe") {
		return (
			<div className="flex items-center gap-2">
				{inputField}
				<button
					onClick={() => onSubmit(value)}
					className="px-4 py-2 bg-blue-600 text-white rounded-full"
				>
					{buttonText}
				</button>
			</div>
		);
	}

	if (type === "underline") {
		return <div className="full">{inputField}</div>;
	}

	return null;
}
