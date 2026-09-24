"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";

/**
 * Wraps the whole app in a Lenis smooth-scroll instance and syncs it with
 * GSAP's ticker. This is the "inertia" scroll feel — the page keeps gliding
 * for a moment after you stop scrolling, instead of stopping dead.
 *
 * Also registers ScrollTrigger once, globally, so any component can use
 * `gsap.registerPlugin` / `ScrollTrigger.create` without re-registering it.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Respect reduced-motion: skip the custom inertia scroll entirely and
    // let the browser's native (instant) scrolling take over.
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Drive Lenis from GSAP's own render loop so GSAP-driven animations
    // (ScrollTrigger included) and the smooth scroll stay in perfect sync.
    function raf(time: number) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
