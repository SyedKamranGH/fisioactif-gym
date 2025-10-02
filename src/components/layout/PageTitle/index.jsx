"use client";
import React from "react";
import { ChevronRight } from "lucide-react";

const PageTitle = ({ title, breadcrumbs = [], className = "" }) => {
  return (
    <div className={`bg-white px-4 py-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {/* Page Title */}
        <h1 className="mb-4 text-center text-4xl font-bold text-neutral-900 md:text-5xl">
          {title}
        </h1>

        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <div className="flex justify-center">
            <nav className="flex items-center space-x-2" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <ChevronRight className="h-4 w-4 text-neutral-500" />}
                  <span
                    className={`text-sm font-medium ${
                      index === breadcrumbs.length - 1
                        ? "bg-primary rounded-md px-3 py-1 text-white"
                        : "hover:text-primary text-neutral-600 transition-colors"
                    }`}
                  >
                    {crumb}
                  </span>
                </React.Fragment>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageTitle;
