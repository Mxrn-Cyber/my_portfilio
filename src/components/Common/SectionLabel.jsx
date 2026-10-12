import React from "react";

// Small "Focus ↘" style label that sits above a section heading.
const SectionLabel = ({ children, arrow = "↘" }) => (
  <div className="section-label">
    <span className="section-label-dot" aria-hidden="true" />
    <span>{children}</span>
    <span className="section-label-arrow" aria-hidden="true">
      {arrow}
    </span>
  </div>
);

export default SectionLabel;
