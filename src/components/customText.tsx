import { useTheme } from "../themeContext";

interface CustomTextProps {
  text?: string;
  stateProp?: string;
}

export const CustomText = (props: CustomTextProps) => {
  const { theme, themeType, age } = useTheme();

  console.log("THEME ", themeType, theme);
  return (
    <div>
      <p>THEME TYPE = {themeType}</p>
      {props.text}
      <p>{props.stateProp}</p>
    </div>
  );
};
