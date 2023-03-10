import React, { InputHTMLAttributes } from "react";

import { FieldError } from "react-hook-form";

import { Input as InputStyles, Label, Error } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

export const Input = ({ label, name, error = null, ...rest }: InputProps) => {

  console.log(error);

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <InputStyles
        id={name}
        isError={!!error}
        {...rest}
      />
      {error && <Error>{error.message}</Error>}
    </>
  )
}