"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./margin-creature.module.css";

const messages = { hop: "!", shy: "…", love: "♥", curious: "?" };

const getPeekDuration = () =>
  Math.random() < 0.3 ? 1000 : 4000 + Math.random() * 2000;

export default function MarginCreature() {
  const [reaction, setReaction] = useState<keyof typeof messages | null>(null);
  const [visits, setVisits] = useState(0);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reset = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shortReturn = useRef(false);
  const peekDuration = useRef(4500);

  useEffect(() => {
    if (visible && (hovered || focused || reaction)) return;
    const wait = shortReturn.current
      ? 3000 + Math.random() * 3000
      : 12_000 + Math.random() * 8000;
    const timer = setTimeout(
      () => {
        if (!visible) {
          peekDuration.current = getPeekDuration();
          shortReturn.current = false;
        }
        setVisible(!visible);
        setReaction(null);
      },
      visible ? peekDuration.current : wait
    );
    return () => clearTimeout(timer);
  }, [visible, hovered, focused, reaction]);

  useEffect(
    () => () => {
      if (reset.current) clearTimeout(reset.current);
    },
    []
  );

  const sayHello = () => {
    if (reset.current) clearTimeout(reset.current);
    if (!visible) {
      shortReturn.current = false;
      peekDuration.current = getPeekDuration();
      setVisible(true);
      setReaction("curious");
      reset.current = setTimeout(() => setReaction(null), 1250);
      return;
    }

    const roll = Math.random();
    let nextReaction: "hop" | "shy" | "love" = "shy";
    if (visits === 5 || roll < 0.2) nextReaction = "love";
    else if (roll < 0.7) nextReaction = "hop";
    setVisits((count) => count + 1);
    setReaction(nextReaction);
    reset.current = setTimeout(() => {
      if (nextReaction === "shy") {
        shortReturn.current = true;
        setHovered(false);
        setFocused(false);
        setVisible(false);
      } else {
        setReaction(null);
      }
    }, 1000);
  };

  return (
    <div className={styles.corner}>
      <button
        aria-label={
          visible
            ? "Say hello to the margin creature"
            : "Wake the margin creature"
        }
        className={styles.creature}
        data-reaction={reaction ?? "idle"}
        data-visible={visible}
        disabled={visible && reaction === "shy"}
        onBlur={() => setFocused(false)}
        onClick={sayHello}
        onFocus={() => setFocused(true)}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        title={visible ? "Oh. Hello." : "Anyone in there?"}
        type="button"
      >
        <span aria-hidden="true" className={styles.appearance}>
          <span
            aria-hidden="true"
            className={styles.message}
            key={`message-${visits}-${reaction}`}
          >
            {reaction ? messages[reaction] : ""}
          </span>
          <span aria-hidden="true" className={styles.window}>
            <span className={styles.body} key={visits}>
              <svg
                className={styles.sprite}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <title>A curious little pixel creature</title>
                <path d="M5 5V3h2v2h2V4h6v1h2V3h2v3h2v3h2v8h-2v3h-3v2h-3v-2H9v2H6v-2H3v-3H1V9h2V6h2Z" />
                <g className={styles.eyes}>
                  <path d="M5 10h5v5H5zm9 0h5v5h-5z" fill="var(--background)" />
                  <g className={styles.pupils}>
                    <path d="M7 11h2v3H7zm9 0h2v3h-2z" />
                  </g>
                </g>
              </svg>
            </span>
          </span>
        </span>
      </button>
    </div>
  );
}
