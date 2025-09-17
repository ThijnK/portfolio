"use client";

import { motion, useMotionValue, useSpring, type Variant } from "framer-motion";
import React, { type ReactNode, useCallback, useEffect, useState } from "react";

type VariantConfig = {
  animation: Variant;
  selectors?: string[];
};

type CursorVariants = {
  default: Omit<VariantConfig, "selectors">;
  exit: Omit<VariantConfig, "selectors">;
  pointer: VariantConfig;
  [key: string]: VariantConfig;
};

/**
 * Configuration for cursor variants.
 *
 * To add a new variant:
 * 1. Add a new key to this object with animation properties
 * 2. Optionally add query selectors that should trigger this variant
 * 3. The variant will automatically be available for use
 *
 * Special variants:
 * - 'default': The default cursor state
 * - 'exit': Hidden cursor state for when mouse leaves or page becomes hidden
 *
 * To mark an element to trigger a specific variant, you can use either:
 * - A class name: `custom-cursor-{variantName}` (e.g., `custom-cursor-pointer`)
 * - A data attribute: `data-cursor="{variantName}"` (e.g., `data-cursor="pointer"`)
 *
 * If you want a particular type of element to always trigger a variant, you can add it to the `selectors` array in the configuration.
 * For instance, all `<button>` elements trigger the `pointer` variant by default.
 *
 * Example new variant:
 * ```
 * hover: {
 *   animation: { opacity: 0.5, scale: 1.5, height: 32, width: 32 },
 *   selectors: ['.hoverable'] // .custom-cursor-hover and [data-cursor='hover'] are automatic
 * }
 * ```
 */
const cursorConfig: CursorVariants = {
  default: {
    animation: {
      opacity: 0.7,
      height: 24,
      width: 24,
      borderRadius: "100%",
    },
  },
  exit: {
    animation: {
      opacity: 0,
      scale: 0,
      borderRadius: "100%",
    },
  },
  pointer: {
    animation: {
      opacity: 1,
      height: 12,
      width: 12,
      borderRadius: "100%",
    },
    selectors: ["a", "button", "input", "label"],
  },
  large: {
    animation: {
      opacity: 1,
      height: 48,
      width: 48,
      borderRadius: "100%",
    },
  },
};

// Extract just the animation properties for framer-motion
const variants = Object.entries(cursorConfig).reduce(
  (acc, [key, config]) => {
    acc[key] = config.animation;
    return acc;
  },
  {} as Record<string, VariantConfig["animation"]>
);

export const CursorWrapper = ({ children }: { children: ReactNode }) => {
  const [isTouchScreen, setIsTouchScreen] = useState(true);

  useEffect(() => {
    if (window?.matchMedia("(pointer: coarse)").matches) {
      setIsTouchScreen(true);
    }
  }, []);

  return isTouchScreen ? <CustomCursor>{children}</CustomCursor> : children;
};

function CustomCursor({ children, ...props }: React.ComponentProps<"div">) {
  const [variant, setVariant] = useState<keyof typeof variants>("exit");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create spring animations that follow the mouse with lag
  const cursorX = useSpring(mouseX, { stiffness: 200, damping: 23 });
  const cursorY = useSpring(mouseY, { stiffness: 200, damping: 23 });

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const x = e.clientX;
      const y = e.clientY;
      mouseX.set(x);
      mouseY.set(y);

      const margin = 30;
      const isNearEdge =
        x < margin ||
        y < margin ||
        x > window.innerWidth - margin ||
        y > window.innerHeight - margin;

      if (isNearEdge) {
        setVariant((current) => (current !== "default" ? current : "exit"));
      } else {
        setVariant((current) =>
          current !== "default" && current !== "exit" ? current : "default"
        );
      }
    },
    [mouseX, mouseY]
  );

  const setupVariantListeners = useCallback(() => {
    const variantEventListeners: Array<{
      elements: NodeListOf<Element>;
      variant: string;
      enterHandler: () => void;
      leaveHandler: () => void;
    }> = [];

    for (const [variantName, config] of Object.entries(cursorConfig)) {
      // Always include universal selectors for each variant
      const universalSelectors = [
        `.custom-cursor-${variantName}`,
        `[data-cursor='${variantName}']`,
      ];

      // Combine with custom selectors if they exist
      const allSelectors =
        "selectors" in config && Array.isArray(config.selectors)
          ? [...config.selectors, ...universalSelectors]
          : universalSelectors;

      const selector = allSelectors.join(", ");
      const elements = document.querySelectorAll(selector);

      if (elements.length > 0) {
        const enterHandler = () =>
          setVariant(variantName as keyof typeof variants);
        const leaveHandler = () => setVariant("default");

        variantEventListeners.push({
          elements,
          variant: variantName,
          enterHandler,
          leaveHandler,
        });

        for (const el of elements) {
          el.addEventListener("mouseenter", enterHandler);
          el.addEventListener("mouseleave", leaveHandler);
        }
      }
    }

    return variantEventListeners;
  }, []);

  // Debounce function to prevent excessive re-setup
  const debounce = useCallback((func: () => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(func, delay);
    };
  }, []);

  useEffect(() => {
    const handleGlobalPointerOut = (e: PointerEvent) => {
      if (!e.relatedTarget) {
        setVariant("exit");
      }
    };
    const handleVisibility = () => {
      if (document.visibilityState !== "visible") {
        setVariant("exit");
      }
    };
    window.addEventListener("pointerout", handleGlobalPointerOut);
    document.addEventListener("visibilitychange", handleVisibility);

    let currentListeners: ReturnType<typeof setupVariantListeners> = [];
    const refreshListeners = () => {
      for (const { elements, enterHandler, leaveHandler } of currentListeners) {
        for (const el of elements) {
          el.removeEventListener("mouseenter", enterHandler);
          el.removeEventListener("mouseleave", leaveHandler);
        }
      }
      currentListeners = setupVariantListeners();
    };
    refreshListeners();

    // Refresh listeners on DOM changes (for SPA navigation)
    const debouncedRefresh = debounce(refreshListeners, 100);
    const observer = new MutationObserver((mutations) => {
      const hasRelevantChanges = mutations.some(
        (mutation) =>
          mutation.type === "childList" &&
          (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0)
      );

      if (hasRelevantChanges) debouncedRefresh();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("pointerout", handleGlobalPointerOut);
      document.removeEventListener("visibilitychange", handleVisibility);
      observer.disconnect();

      // Clean up all current event listeners
      for (const { elements, enterHandler, leaveHandler } of currentListeners) {
        for (const el of elements) {
          el.removeEventListener("mouseenter", enterHandler);
          el.removeEventListener("mouseleave", leaveHandler);
        }
      }
    };
  }, [setupVariantListeners, debounce]);

  return (
    <div onPointerMove={handlePointerMove} {...props}>
      <motion.div
        animate={variant}
        className="pointer-events-none fixed z-50 hidden cursor-none border md:block"
        id="custom-cursor"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ type: "spring", damping: 14 }}
        variants={variants}
      />
      {children}
    </div>
  );
}
