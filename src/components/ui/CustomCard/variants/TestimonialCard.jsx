import React from "react";
import Card from "../primitive/Card";

function TestimonialCard({ quote, author, rating = 5, className = "" }) {
  return (
    <Card size="large" className={className}>
      {/* Minimal stub: can be enhanced in Phase 3 */}
      {quote ? <p style={{ padding: 24, textAlign: "center" }}>{quote}</p> : null}
      {author?.name ? (
        <div style={{ textAlign: "center", paddingBottom: 16, fontWeight: 600 }}>{author.name}</div>
      ) : null}
    </Card>
  );
}

export default TestimonialCard;
