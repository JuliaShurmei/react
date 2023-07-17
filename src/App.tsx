import { useState } from "react";
import styled from "styled-components";
import { Counter } from "./components/counter/counter";
import { SignUp } from "./components/signUp/signUp";
import { ThemeContext } from "./themeContext";
import { Theme, Themes, ThemeType } from "./themeContext/themes";

const Button = styled.button<{ theme: Theme; myType: string }>`
  position: ${({ myType }) => (myType === "Primary" ? "none" : "absolute")};
  border-color: ${({ theme }) => theme.toggleBorder};
  border-width: 2px;
  padding: 10px;
  border-style: solid;
  color: ${({ theme }) => theme.text};
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
`;

const ButtonSecond = styled.button(({ theme }) => ({
  borderColor: theme.toggleBorder,
  borderStyle: "solid",
  borderWidth: 2,
}));

function App() {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    switch (theme) {
      case "dark":
        setTheme("light");
        break;
      case "light":
        setTheme("dark");
        break;
    }
  };

  return (
    <div>
      <ThemeContext.Provider
        value={{ themeType: theme, theme: Themes[theme], age: 23, toggleTheme }}
      >
        <Button theme={Themes[theme]} onClick={toggleTheme} myType="Primary">
          Change theme
        </Button>

        <ButtonSecond theme={Themes[theme]} onClick={toggleTheme}>
          Change theme
        </ButtonSecond>
        <SignUp />
        <Counter />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
