"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mail, Clock, Phone, Search, Menu, X } from "lucide-react";
import CustomButton from "../../ui/Button";
import InputField from "../../ui/Input";

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Information Bar */}
      <div className="px-4 py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-sm">
          <div className="ms-10 flex items-center gap-2">
            <Mail className="text-primary h-4 w-4" />
            <span>info@fisioactif.pt</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="text-primary h-4 w-4" />
              <span>Horário 09:00H - 20:00H</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-primary h-4 w-4" />
              <span>+351 123 456 789</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Center Floating with Slanted Sides */}
      <div className="flex justify-center px-5 py-2">
        <div className="relative w-full max-w-7xl px-7">
          {/* Slanted Background */}
          <div
            className="absolute inset-0 bg-white shadow-lg"
            style={{
              clipPath: "polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)",
              width: "100%",
              height: "100%",
            }}
          ></div>

          {/* Navigation Content */}
          <div className="relative flex items-center justify-between px-8 py-1">
            {/* Logo */}
            <div className="ml-2 flex-shrink-0">
              <Image
                src="/Logo_fisioactif-280x334.jpg"
                alt="Fisio Actif Logo"
                width={50}
                height={50}
                className="rounded-full object-cover"
                priority
              />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="items-center space-x-6 md:flex">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-base font-medium transition-colors duration-200 ${
                    item.active
                      ? "text-primary border-primary border-b-2 pb-1"
                      : "hover:text-primary text-neutral-700"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Search Button */}
              <div className="sm:block">
                <CustomButton
                  variant="search"
                  icon={<Search className="h-5 w-5" />}
                  onClick={() => console.log("Search clicked")}
                />
              </div>

              {/* Consulta Button */}
              <div className="sm:block">
                <CustomButton
                  label="Consulta"
                  variant="slanted"
                  onClick={() => console.log("Consulta clicked")}
                />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
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
      {isMobileMenuOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`rounded-md px-4 py-2 text-base font-medium transition-colors duration-200 ${
                  item.active
                    ? "text-primary bg-primary/10 border-primary border-l-4"
                    : "hover:text-primary text-neutral-700 hover:bg-neutral-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Action Buttons */}
            <div className="flex flex-col space-y-3 border-t border-neutral-200 pt-4">
              <div className="flex justify-center">
                <CustomButton
                  variant="search"
                  icon={<Search className="h-5 w-5" />}
                  onClick={() => {
                    console.log("Search clicked");
                    setIsMobileMenuOpen(false);
                  }}
                />
              </div>
              <div className="flex justify-center">
                <CustomButton
                  label="Consulta"
                  variant="slanted"
                  onClick={() => {
                    console.log("Consulta clicked");
                    setIsMobileMenuOpen(false);
                  }}
                />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
