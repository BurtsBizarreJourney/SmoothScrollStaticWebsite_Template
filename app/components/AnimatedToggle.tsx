"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ToggleState = {
  key: string;
  label: string;
  title: string;
  description: string;
};

export default function AnimatedToggle({
  states,
}: {
  states: [ToggleState, ToggleState];
}) {
  const [active, setActive] = useState(0);
  const current = states[active];

  return (
    <div className="animated-toggle">
      <div className="toggle-switch" role="tablist">
        {states.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={active === i}
            className={`toggle-btn${active === i ? " is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* AnimatePresence lets the outgoing panel animate out before the
          incoming one animates in, instead of an abrupt swap. */}
      <div className="toggle-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="toggle-panel"
          >
            <h3>{current.title}</h3>
            <p>{current.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
