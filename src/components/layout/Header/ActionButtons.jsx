"use client";
import React from "react";
import { Search } from "lucide-react";
import CustomButton from "../../ui/Button";

const ActionButtons = ({ onSearchClick, onConsultaClick, className = "" }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {/* Search Button */}
      <div className="block">
        <CustomButton
          variant="search"
          icon={<Search className="h-5 w-5" />}
          onClick={onSearchClick}
        />
      </div>

      {/* Consulta Button */}
      <div className="block">
        <CustomButton label="Consulta" variant="slanted" onClick={onConsultaClick} />
      </div>
    </div>
  );
};

export default ActionButtons;
