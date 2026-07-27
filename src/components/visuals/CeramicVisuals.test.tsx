import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CeramicMark } from "./CeramicVisuals";

describe("CeramicMark", () => {
  it("renders a distinct recognisable detail for each ceramic type", () => {
    const { container } = render(
      <>
        <CeramicMark variant="cup" />
        <CeramicMark variant="bowl" />
        <CeramicMark variant="vase" />
        <CeramicMark variant="urn" />
        <CeramicMark variant="tall" />
      </>,
    );

    expect(
      container.querySelector('[data-ceramic-variant="cup"] [data-ceramic-part="handle"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-ceramic-variant="bowl"] [data-ceramic-part="rim"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-ceramic-variant="vase"] [data-ceramic-part="neck"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-ceramic-variant="vase"] [data-ceramic-part="band"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-ceramic-variant="vase"] [data-ceramic-part="highlight"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-ceramic-variant="urn"] [data-ceramic-part="body"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-ceramic-variant="tall"] [data-ceramic-part="body"]'),
    ).toBeInTheDocument();
  });
});
