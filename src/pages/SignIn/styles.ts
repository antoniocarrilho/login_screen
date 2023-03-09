import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  background-color: white;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  background-color: #00B5FF;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  & > form > div {
    display: flex;
    justify-content: space-between;

    & > div > label {
      margin-left: 8px;
    }
  }
`;

export const Form = styled.form`
  width: 300px;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Button = styled.button`
  margin-top: 12px;

  color: #FFF;
  background-color: #00B5FF;

  padding: 6px;

  font-size: 24px;

  border: 0;

  &:hover {
    opacity: 0.7;
  }
`;