interface ErrorMessageProps {
  errorField: string;
}
export const ErrorMessage = ({ errorField }: ErrorMessageProps) => {
  return <div style={{ color: "red" }}>{errorField}</div>;
};
