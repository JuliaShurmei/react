import React from "react";

enum Color {
  AZURE = "#F0FFFF",
  BEIGE = "#F5F5DC",
  BROWN = "#A52A2A",
  CADET_BLUE = "#5F9EA0",
  CORAL = "#FF7F50",
  CYAN = "#00FFFF",
  DARK_BLUE = "#00008B",
  DARK_GREEN = "#006400",
}

export type ThemeType = "dark" | "light";

export interface Theme {
  body: Color;
  text: Color;
  toggleBorder: Color;
  background: Color;
}

export const Themes: Record<ThemeType, Theme> = {
  light: {
    body: Color.AZURE,
    text: Color.BEIGE,
    toggleBorder: Color.BROWN,
    background: Color.CADET_BLUE,
  },
  dark: {
    body: Color.CORAL,
    text: Color.CYAN,
    toggleBorder: Color.DARK_BLUE,
    background: Color.DARK_GREEN,
  },
};
