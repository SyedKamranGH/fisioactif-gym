"use client";
import React from "react";
import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = ({ breadcrumbItems = ["Home", "Servicos"] }) => {
  return (
    <div>
      <h1 className={styles.pageTitle}>{breadcrumbItems[breadcrumbItems.length - 1]}</h1>

      <nav className={styles.breadcrumbWrapper} aria-label="Breadcrumb">
        {breadcrumbItems.map((item, idx) => {
          const isLast = idx === breadcrumbItems.length - 1;
          const label = typeof item === "string" ? item : item.label;
          const href = typeof item === "string" ? undefined : item.href;

          return (
            <span key={idx} className={styles.breadcrumbItem}>
              {!isLast ? (
                <Link href={href ?? "#"} className={styles.link}>
                  {label}
                </Link>
              ) : (
                <span className={styles.current}>{label}</span>
              )}

              {!isLast && <span className={styles.separator}>›</span>}
            </span>
          );
        })}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
