import React from "react";
import { StyledLoginInput } from "./StyledLoginInput";

const LoginInput = (props) =>(
    <>
    {props.labelContent && <label>{props.labelContent}</label>}
    <StyledLoginInput {...props} />
  </>
);

export default LoginInput;
