import styled from "styled-components";
import { Theme, ThemeType } from "../../themeContext/themes";

export const CounterStyled = {
  CounterContainer: styled.div<{
    themeType: ThemeType;
    theme: Theme;
  }>`
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    padding: ${({ themeType }) => (themeType === "dark" ? "10px" : "20px")};
  `,
  MainText: styled.p`
    color: ${({ theme }) => theme.toggleBorder};
  `,
};
