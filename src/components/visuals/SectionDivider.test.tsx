import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SectionDivider } from "./SectionDivider";

describe("SectionDivider", () => {
  it("creates a curved transition in the requested next-section color", () => {
    const { container } = render(
      <SectionDivider fill="var(--foreground)" variant="deep" />,
    );

    expect(container.querySelector("svg")).toHaveAttribute("viewBox", "0 0 1440 120");
    expect(container.querySelector("[data-section-curve]")).toHaveAttribute(
      "fill",
      "var(--foreground)",
    );
    expect(container.querySelector("[data-section-curve-blur]")).toHaveAttribute(
      "fill",
      "var(--foreground)",
    );
    expect(container.querySelector(".section-divider")).toHaveAttribute(
      "data-variant",
      "deep",
    );
  });
});
