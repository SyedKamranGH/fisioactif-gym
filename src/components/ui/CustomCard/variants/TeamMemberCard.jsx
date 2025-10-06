import React from "react";
import Card from "../primitive/Card";
import cls from "../styles/Card.module.css";

function TeamMemberCard({
  image,
  name,
  role,
  ribbonPosition = "bottom-right",
  size = "medium",
  className = "",
}) {
  const style = ribbonPosition === "bottom-left" ? { left: 12, right: "auto" } : { right: 12 };
  return (
    <Card size={size} className={className}>
      <div className={cls.teamWrapper}>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={name} className={cls.teamImage} loading="lazy" />
        ) : null}
        <div className={cls.ribbon} style={style}>
          <span className={cls.ribbonInner}>{name || "LOREM"}</span>
        </div>
      </div>
    </Card>
  );
}

export default TeamMemberCard;
