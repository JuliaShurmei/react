import { useState } from "react";

import { useTheme } from "../../themeContext";

import { CustomText } from "../customText";
import { CounterStyled } from "./counter.styled";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(8);

  const { theme, themeType, toggleTheme } = useTheme();


  return (
    <CounterStyled.CounterContainer themeType={themeType} theme={theme}>
      <CustomText />
      <CounterStyled.MainText theme={theme}>
        Counter value: {counter}
      </CounterStyled.MainText>
      <button onClick={toggleTheme}>CHANGE THEME FROM COUNTER</button>
    </CounterStyled.CounterContainer>
  );
};
