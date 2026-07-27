import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

export function SectionDivider({
  className,
  fill,
  variant = "swell",
  ...props
}: {
  className?: string;
  fill: string;
  variant?: "swell" | "deep" | "ripple" | "clay";
} & Omit<ComponentPropsWithoutRef<"div">, "children" | "className">) {
  const paths = {
    swell: "M0 56C138 112 308 108 466 67C656 18 770 6 947 52C1127 99 1278 100 1440 38V120H0Z",
    deep: "M0 30C155 104 300 116 470 76C652 32 765 8 936 36C1120 66 1270 114 1440 54V120H0Z",
    ripple: "M0 64C118 28 208 30 330 64C452 98 540 100 665 62C790 24 882 26 1002 63C1125 101 1280 99 1440 48V120H0Z",
    clay: "M0 78C188 88 278 44 438 28C606 11 740 25 858 67C1004 119 1160 120 1272 70C1340 40 1390 35 1440 42V120H0Z",
  };
  const path = paths[variant];

  return (
    <div className={cn("section-divider", className)} data-variant={variant} aria-hidden="true" {...props}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          data-section-curve-blur
          className="section-divider-blur"
          fill={fill}
          d={path}
        />
        <path
          data-section-curve
          fill={fill}
          d={path}
        />
      </svg>
    </div>
  );
}
