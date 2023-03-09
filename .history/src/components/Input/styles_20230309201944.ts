import styled from "styled-components";

interface InputProps {
  isError: boolean;
}

export const Label = styled.label`
  margin-bottom: 4px;
`;

export const Input = styled.input<InputProps>`
  margin-bottom: 8px;

  border-color: red;
`;

export const Error = styled.span`
  color: red;
`;