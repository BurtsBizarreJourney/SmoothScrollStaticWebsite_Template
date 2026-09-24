"use client";

import { motion } from "framer-motion";

type FeatureCard = {
  title: string;
  description: string;
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function RevealCards({ cards }: { cards: FeatureCard[] }) {
  return (
    <motion.div
      className="reveal-grid"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {cards.map((card) => (
        <motion.div key={card.title} className="reveal-card card" variants={item}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
