"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Frame = {
  alt: string;
  caption?: string;
};

type ScrollPinRevealProps = {
  frames: Frame[];
  /** How much scroll distance (in viewport heights) the whole sequence takes. */
  scrollLengthVh?: number;
};

/**
 * The "pin a panel and scrub through content as the user scrolls" effect.
 * The section is pinned in place for `scrollLengthVh` of scroll distance,
 * while GSAP crossfades between `frames` based on scroll progress.
 *
 * Swap the placeholder divs for <Image> / <video> and this is the same
 * technique behind most "scrollytelling" product reveals.
 */
export default function ScrollPinReveal({
  frames,
  scrollLengthVh = 300,
}: ScrollPinRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const els = frameRefs.current.filter(Boolean) as HTMLDivElement[];
      if (els.length === 0) return;

      // Start with only the first frame visible.
      gsap.set(els, { autoAlpha: 0 });
      gsap.set(els[0], { autoAlpha: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${scrollLengthVh}%`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Crossfade sequentially through every frame after the first.
      els.slice(1).forEach((el) => {
        tl.to(els, { autoAlpha: 0, duration: 0.4 }, "+=0.3");
        tl.to(el, { autoAlpha: 1, duration: 0.4 }, "<");
      });
    }, container);

    return () => ctx.revert();
  }, [scrollLengthVh]);

  return (
    <div ref={containerRef} className="pin-reveal">
      <div className="pin-reveal-stage">
        {frames.map((frame, i) => (
          <div
            key={frame.alt}
            ref={(el) => {
              frameRefs.current[i] = el;
            }}
            className="pin-reveal-frame"
            role="img"
            aria-label={frame.alt}
          >
            {frame.caption && (
              <p className="pin-reveal-caption">{frame.caption}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
