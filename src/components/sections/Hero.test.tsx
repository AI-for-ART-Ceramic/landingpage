import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Hero from "./Hero";

function renderHero() {
  return render(
    <LanguageProvider>
      <Hero />
    </LanguageProvider>,
  );
}

describe("Hero", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("keeps the headline and demo in separate visual columns", () => {
    renderHero();

    expect(
      screen.getByRole("heading", {
        name: "Transform Conversations into Business Intelligence",
      }),
    ).toHaveClass("hero-title-contained");
    expect(screen.getByTestId("hero-demo-column")).toHaveClass(
      "hero-demo-column",
      "hero-demo-gutter",
    );
  });

  it("marks Thai hero copy for the display type treatment", async () => {
    localStorage.setItem("language", "th");
    renderHero();

    await waitFor(() =>
      expect(screen.getByRole("heading", { level: 1 })).toHaveClass(
        "hero-title-thai",
      ),
    );
  });

  it("exposes the active language on the Hero typography scope", async () => {
    localStorage.setItem("language", "th");
    renderHero();

    await waitFor(() =>
      expect(screen.getByTestId("hero-section")).toHaveAttribute(
        "data-language",
        "th",
      ),
    );
  });

  it("exposes the interactive demo as an accessible tab interface", async () => {
    renderHero();

    const chatTab = screen.getByRole("tab", { name: "AI Smart Agent" });
    const analyticsTab = screen.getByRole("tab", {
      name: "Sentiment Analytics",
    });

    expect(chatTab).toHaveAttribute("aria-selected", "true");
    expect(analyticsTab).toHaveAttribute("aria-selected", "false");

    fireEvent.click(analyticsTab);

    expect(chatTab).toHaveAttribute("aria-selected", "false");
    expect(analyticsTab).toHaveAttribute("aria-selected", "true");
    expect(
      await screen.findByText("Chiang Mai Workshop Dashboard"),
    ).toBeInTheDocument();
  });

  it("keeps the original Ceramix conversion path", () => {
    renderHero();

    expect(
      screen.getByRole("link", { name: /get started now/i }),
    ).toHaveAttribute("href", "https://ceramix.lanna-ai.com");
  });

  it("uses the original ceramic preview photo when the chat reaches its preview step", () => {
    vi.useFakeTimers();

    try {
      renderHero();

      act(() => {
        vi.advanceTimersByTime(10_500);
      });

      expect(
        screen.getByAltText("Ceramic Celadon Cup with Gold Trim Preview"),
      ).toHaveAttribute(
        "src",
        "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80",
      );
    } finally {
      vi.useRealTimers();
    }
  });

  it("switches demo tabs with the arrow keys", () => {
    renderHero();

    const chatTab = screen.getByRole("tab", { name: "AI Smart Agent" });
    const analyticsTab = screen.getByRole("tab", {
      name: "Sentiment Analytics",
    });

    chatTab.focus();
    fireEvent.keyDown(chatTab, { key: "ArrowRight" });

    expect(analyticsTab).toHaveFocus();
    expect(analyticsTab).toHaveAttribute("aria-selected", "true");
  });
});
