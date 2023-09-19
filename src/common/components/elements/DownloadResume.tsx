import React from "react";

// eslint-disable-next-line react/prop-types
export default function DownloadResume({ className = "" }) {
  return (
    <button
      type="button"
      className={`btn text-white font-bold border-0 bg-orange-700 hover:bg-orange-600 ${className}`}
    >
      Download CV
    </button>
  );
}
