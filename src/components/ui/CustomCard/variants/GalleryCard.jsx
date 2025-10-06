import React from "react";
import Card from "../primitive/Card";

function GalleryCard({ image, title, subtitle, className = "", size = "large" }) {
  return (
    <Card size={size} className={className}>
      {/* Minimal stub: can be enhanced in Phase 3 */}
      {title ? <div style={{ padding: 16, fontWeight: 600 }}>{title}</div> : null}
      {subtitle ? <div style={{ padding: "0 16px 16px", color: "#666" }}>{subtitle}</div> : null}
    </Card>
  );
}

export default GalleryCard;
