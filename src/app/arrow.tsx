"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export function Arrow() {
  useLayoutEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo(
      ".arrow",
      { y: -500, opacity: 0 },
      { y: 200, opacity: 1, ease: "power2.out", duration: 1 },
    );
    tl.to(
      ".arrow",
      { y: 500, opacity: 0, ease: "power2.in", duration: 1 },
      "+1",
    );
  });
  return (
    <div className="fixed flex justify-center w-screen h-screen overflow-hidden">
      <div className=" opacity-0 arrow text-[20vw]">↓</div>
    </div>
  );
}
