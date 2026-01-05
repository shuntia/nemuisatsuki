"use client";

import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Link from "next/link";
import { useLayoutEffect } from "react";

export default function Page() {
  useLayoutEffect(() => {
    gsap.registerPlugin(SplitText);
    let st = SplitText.create(".wavy", { type: "chars" });
    let tl = gsap.timeline({ repeat: -1 });
    gsap.set(st.chars, { y: -50 });
    tl.to(st.chars, { y: 50, ease: "sine.inOut", stagger: 0.1, duration: 1 });
    tl.to(
      st.chars,
      { y: -50, ease: "sine.inOut", stagger: 0.1, duration: 1 },
      "<+0.5",
    );
  });
  return (
    <>
      <div className="h-screen w-screen">
        <div className="wavy pt-[30vh] h-20vh text-9xl text-center w-full font-light">
          404 Not found!!!
        </div>
        <div className="text-9xl text-center w-full pt-[10vh]">🪦</div>
        <div className="w-full flex justify-center p-20">
          <Link href="/">
            <Button className="text-2xl font-light p-5">Home</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
