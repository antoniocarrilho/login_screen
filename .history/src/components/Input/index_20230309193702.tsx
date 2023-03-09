import React, { InputHTMLAttributes } from "react";

import { FieldError } from "react-hook-form";

import { Input as InputStyles, Label } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errors: FieldError | undefined;
}

export const Input = ({ label, name, errors, ...rest }: InputProps) => {
  return (
    <>
      <Label >{label}</Label>
      <InputStyles

        {...rest}
      />
      {errors && <span>{errors.message}</span>}
    </>
  )
}