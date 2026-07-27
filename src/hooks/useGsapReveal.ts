"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function useGsapReveal(
  scope: RefObject<HTMLElement | null>,
  options: { stagger?: number; start?: string } = {},
) {
  const { stagger = 0.1, start = "top 78%" } = options;

  useGSAP(
    () => {
      const element = scope.current;
      if (!element) return;

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const revealItems = gsap.utils.toArray<HTMLElement>(
          "[data-gsap-reveal]",
          element,
        );

        revealItems.forEach((item, index) => {
          gsap.fromTo(
            item,
            { autoAlpha: 0, y: 24, rotate: 0, scale: 0.985 },
            {
              autoAlpha: 1,
              y: 0,
              rotate: 0,
              scale: 1,
              duration: 0.9,
              delay: index * stagger * 0.35,
              ease: "power4.out",
              clearProps: "transform",
              scrollTrigger: {
                trigger: item,
                start,
                once: true,
              },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-gsap-float]", element).forEach(
          (item) => {
            gsap.to(item, {
              yPercent: -8,
              rotate: -1,
              ease: "sine.inOut",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.6,
              },
            });
          },
        );

        gsap.utils.toArray<HTMLElement>("[data-gsap-divider]", element).forEach(
          (divider) => {
            gsap.fromTo(
              divider,
              { xPercent: -4, scaleX: 0.94, transformOrigin: "left center" },
              {
                xPercent: 0,
                scaleX: 1,
                duration: 1.1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
                  start,
                  once: true,
                },
              },
            );
          },
        );

        const path = element.querySelector<SVGPathElement>(
          "[data-gsap-path]",
        );

        if (path) {
          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.8,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: element,
              start,
              once: true,
            },
          });
        }
      });

      return () => media.revert();
    },
    { scope },
  );
}
