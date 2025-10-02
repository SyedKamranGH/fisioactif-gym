"use client";
import React from "react";
import { Search } from "lucide-react";
import CustomButton from "../../ui/Button";
import NavigationLinks from "./NavigationLinks";

const MobileMenu = ({ isOpen, navigationItems, onItemClick, onSearchClick, onConsultaClick }) => {
  if (!isOpen) return null;

  return (
    <div className="border-t border-neutral-200 bg-white px-4 py-4 md:hidden">
      <nav className="flex flex-col space-y-4">
        <NavigationLinks items={navigationItems} className="flex-col space-y-4" />

        {/* Mobile Action Buttons */}
        <div className="flex flex-col space-y-3 border-t border-neutral-200 pt-4">
          <div className="flex justify-center">
            <CustomButton
              variant="search"
              icon={<Search className="h-5 w-5" />}
              onClick={() => {
                onSearchClick();
                onItemClick();
              }}
            />
          </div>
          <div className="flex justify-center">
            <CustomButton
              label="Consulta"
              variant="slanted"
              onClick={() => {
                onConsultaClick();
                onItemClick();
              }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
