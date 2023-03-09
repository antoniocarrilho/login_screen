import React, { InputHTMLAttributes } from "react";

import { FieldError } from "react-hook-form";

import { Input as InputStyles, Label } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errors: FieldError | undefined;
}

export const Input = ({ label, name, placeholder, errors, ...rest }: InputProps) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <InputStyles
        id={name}
        placeholder={placeholder}

      />
      {errors && <span>{errors.message}</span>}
    </>
  )
}