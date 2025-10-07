"use client";
import React from "react";
import cardStyles from "../styles/Card.module.css";
import styles from "../styles/TeamMemberCard.module.css";

/**
 * Team Member Card Component
 *
 * @param {string} image - Image URL or path
 * @param {string} name - Member name (ribbon title)
 * @param {string} role - Member role (ribbon subtitle)
 * @param {string} alt - Image alt text
 * @param {string} size - Card size variant: "small" | "medium" | "large"
 * @param {string} ribbonPosition - "bottomRight" | "bottomLeft"
 * @param {string} className - Additional CSS classes
 */
function TeamMemberCard({
  image,
  name = "Lorem",
  role = "Lorem Ipsum",
  alt,
  size = "medium",
  ribbonPosition = "bottomRight",
  className = "",
}) {
  return (
    <article
      className={`${styles.teamCard} ${styles[size]} ${className}`}
      aria-label={`Team member: ${name}`}
    >
      {/* Image Container with Slanted Bottom */}
      <div className={styles.imageWrapper}>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={alt || `${name} - ${role}`}
            className={styles.image}
            loading="lazy"
          />
        ) : (
          <div className={styles.placeholder} aria-hidden="true" />
        )}

        {/* Light Grey Slanted Ribbon (bottom layer) */}
        <div className={styles.greyRibbon} aria-hidden="true" />
      </div>

      {/* Red Slanted Ribbon with Text (top layer) */}
      <div
        className={`${cardStyles.ribbonWrapper} ${cardStyles[ribbonPosition]}`}
        aria-hidden="true"
      >
        <div className={cardStyles.ribbon}>
          <div className={cardStyles.ribbonContent}>
            <h3 className={cardStyles.ribbonTitle}>{name}</h3>
            {role && <p className={cardStyles.ribbonSubtitle}>{role}</p>}
          </div>
        </div>
      </div>
    </article>
  );
}

export default TeamMemberCard;
