"use client";

import { useState } from "react";

export default function About() {
  const [click, setClick] = useState(false);
  return (
    <div
      onClick={() => setClick(true)}
      className={`${click ? "text-white" : "text-red-400"}`}
    >
      Page About
    </div>
  );
}
