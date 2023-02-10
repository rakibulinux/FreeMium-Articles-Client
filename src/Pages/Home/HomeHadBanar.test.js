import React from "react";
import { render, screen } from "@testing-library/react";
import HomeHadBanar from "./HomeHadBanar";
import { APIContext } from "../../contexts/APIProvider";

describe("HomeHadBanar", () => {
  it("renders heading and description text", () => {
    render(
      <APIContext.Provider value={{ isDarkMode: false }}>
        <HomeHadBanar />
      </APIContext.Provider>
    );
    expect(screen.getByText("Create your blog and share your passion")).toBeInTheDocument();
    expect(screen.getByText("More bloggers and independent creators choose Freemium")).toBeInTheDocument();
  });
  it("renders start blogging button", () => {
    render(
      <APIContext.Provider value={{ isDarkMode: false }}>
        <HomeHadBanar />
      </APIContext.Provider>
    );
    expect(screen.getByText("Start bloging")).toBeInTheDocument();
  });
  it("renders text and button with correct styles in light mode", () => {
    render(
      <APIContext.Provider value={{ isDarkMode: false }}>
        <HomeHadBanar />
      </APIContext.Provider>
    );
    const heading = screen.getByText("Create your blog and share your passion");
    expect(heading).toHaveClass("text-gray-900");
    const description = screen.getByText("More bloggers and independent creators choose Freemium");
    expect(description).toHaveClass("text-gray-600");
    const button = screen.getByText("Start bloging");
    expect(button).toHaveClass("bg-black-250");
  });
  it("renders text and button with correct styles in dark mode", () => {
    render(
      <APIContext.Provider value={{ isDarkMode: true }}>
        <HomeHadBanar />
      </APIContext.Provider>
    );
    const heading = screen.getByText("Create your blog and share your passion");
    expect(heading).toHaveClass("text-gray-100");
    const description = screen.getByText("More bloggers and independent creators choose Freemium");
    expect(description).toHaveClass("text-gray-200");
    const button = screen.getByText("Start bloging");
    expect(button).toHaveClass("bg-black-250");
  });
});

