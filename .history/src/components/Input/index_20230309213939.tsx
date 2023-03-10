import React, { forwardRef, InputHTMLAttributes } from "react";

import { FieldError } from "react-hook-form";

import { Input as InputStyles, Label, Error } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

export const InputBase = ({ label, name, error, ...rest }: InputProps) => {

  console.log(error);

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <InputStyles
        id={name}
        isError={!!error}
        {...rest}
      />
      {!!error && <Error>{error.message}</Error>}
    </>
  )
}

export const Input = forwardRef(InputBase);