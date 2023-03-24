import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 40px;

  background-color: ${props => props.theme.bg};
`;

export function Header() {
  return (
    <Container>

    </Container>
  )
}
