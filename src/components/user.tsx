import { CustomText } from "./customText";

interface UserProps {
  name: string;
  lastName: string;
  age: number;
  email: string;
}

export const User = (props: UserProps) => {
  return (
    <div
      style={{
        border: props.age > 30 ? "1px solid red" : "1px solid black",
        borderRadius: 8,
        marginTop: 20,
      }}
    >
      <p>Name: {props.name}</p>
      <p>LastName: {props.lastName}</p>
      <p>Age: {props.age}</p>
      {props.name.length > 4 ? (
        <CustomText text={props.email} />
      ) : props.name.length <= 4 ? (
        <p>Small name</p>
      ) : null}
    </div>
  );
};
