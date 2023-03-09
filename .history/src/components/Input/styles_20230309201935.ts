import styled from "styled-components";

interface ErrorProps {
  isError: boolean;
}

export const Label = styled.label`
  margin-bottom: 4px;
`;

export const Input = styled.input<ErrorProps>`
  margin-bottom: 8px;

  border-color: red;
`;

export const Error = styled.span`
  color: red;
`;