"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import TopInfoBar from "./TopInfoBar";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import ActionButtons from "./ActionButtons";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "/", active: false },
    { label: "Calendário", href: "/calendar", active: false },
    { label: "Subscrição", href: "/subscription", active: false },
    { label: "Equipa", href: "/team", active: false },
    { label: "Serviços", href: "/services", active: true },
    { label: "Contactos", href: "/contact", active: false },
  ];

  const handleSearchClick = () => {
    console.log("Search clicked");
  };

  const handleConsultaClick = () => {
    console.log("Consulta clicked");
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* Top Information Bar */}
      <TopInfoBar />

      {/* Main Navigation Bar - Center Floating with Slanted Sides */}
      <div className={styles.mainNavigationContainer}>
        <div className={styles.navigationWrapper}>
          {/* Slanted Background */}
          <div className={styles.slantedBackground}></div>

          {/* Navigation Content */}
          <div className={styles.navigationContent}>
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation Links */}
            <NavigationLinks items={navigationItems} className="flex" />

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <ActionButtons
                onSearchClick={handleSearchClick}
                onConsultaClick={handleConsultaClick}
              />

              {/* Mobile Menu Button */}
              <button
                onClick={handleMobileMenuToggle}
                className="hover:text-primary rounded-md p-2 text-neutral-700 transition-colors hover:bg-neutral-100 md:hidden"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        navigationItems={navigationItems}
        onItemClick={handleMobileItemClick}
        onSearchClick={handleSearchClick}
        onConsultaClick={handleConsultaClick}
      />
    </header>
  );
};

export default Header;
