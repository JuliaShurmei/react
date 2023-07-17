import React, { useContext, useEffect, useState } from "react";

import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Input,
} from "@mui/material";

import { SignUpStyles } from "./signUp.styles";
import { ErrorMessage } from "../error";
import { ThemeContext } from "../../themeContext";

type Errors = Record<string, string>;

const regularExpressionPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const SignUp = () => {
  const [name, setName] = useState<string>("");

  const [errors, setErrors] = useState<Errors>({
    nameError: "",
    emailError: "",
    passwordError: "",
    ageError: "",
  });

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const [age, setAge] = useState<string>("0");
  const [ageError, setAgeError] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const { theme, themeType } = useContext(ThemeContext);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("EVENT target ID", event.target.id);
    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "age":
        setAge(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "checkbox":
        setIsChecked((prev) => !prev);
        setIsShowPassword((prev) => !prev);
        break;
    }
  };

  //for state errors.
  //add this errorHandler to onClick for confirm button

  // const errorHandler = () => {
  //   console.log("ERROR HANDLER");
  //   if (name.length < 8) {
  //     console.log("IF");
  //     setErrors((prev) => {
  //       return {
  //         ...prev,
  //         nameError: "Name must be contain more than 7 characters",
  //       };
  //     });
  //     return;
  //   }

  //   if (!password.match(regularExpressionPassword)) {
  //     setErrors((prev) => {
  //       return {
  //         ...prev,
  //         passwordError:
  //           "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number",
  //       };
  //     });
  //     return;
  //   }
  //   setErrors({
  //     nameError: "",
  //     emailError: "",
  //     passwordError: "",
  //     ageError: "",
  //   });
  // };

  const handleConfirm = () => {
    if (Number(age) < 18) {
      setAgeError("You can't register here");
    }

    console.log("DATA FORM");
    console.log(name);
    console.log(email);
    console.log(age);
    console.log(password);
    console.log(isChecked);
  };

  useEffect(() => {
    console.log("ERRORS CHANGED");
    console.log(errors);
  }, [errors]);

  useEffect(() => {
    //тут мы добавили регулярное выражение для проверки email, чтобы исключить пробелы
    if (!regexEmail.test(email) && email.length !== 0) {
      setEmailError("Please enter corrent email");
    } else {
      setEmailError("");
    }
  }, [email]);

  return (
    <form>
      <div style={SignUpStyles.MainContainer}>
        <h1>Sign Up Form with themeType = {themeType}</h1>
        <label>
          <span>Name:</span>
          <input
            id="name"
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(event) => handleChange(event)}
          />
          {errors.nameError.length > 0 ? (
            <ErrorMessage errorField={errors.nameError} />
          ) : null}
        </label>
        <label>
          <span>Email:</span>
          <Input
            id="email"
            sx={{ border: "1px solid black" }}
            value={email}
            onChange={(event) => handleChange(event)}
          />
          {emailError !== "empty" && <ErrorMessage errorField={emailError} />}
        </label>
        <label>
          <span>Age:</span>
          <input
            id="age"
            type="number"
            placeholder="Enter your age..."
            value={age}
            onChange={(event) => handleChange(event)}
          />
          {ageError && <ErrorMessage errorField={ageError} />}
        </label>
        <label>
          <span>Password:</span>
          <input
            id="password"
            type={isShowPassword ? "text" : "password"}
            placeholder="Enter your password..."
            value={password}
            onChange={(event) => handleChange(event)}
          />
          {errors.passwordError && (
            <ErrorMessage errorField={errors.passwordError} />
          )}
        </label>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                id="checkbox"
                checked={isChecked}
                onChange={(event) => handleChange(event)}
              />
            }
            label="Accept terms"
          />
        </FormGroup>
        <Button variant="contained" size="large" onClick={handleConfirm}>
          Sign Up
        </Button>
      </div>
    </form>
  );
};
