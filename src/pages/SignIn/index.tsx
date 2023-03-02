import React from 'react';

import logo from '../../assets/logo.svg';

import {
  Button,
  Container,
  Content,
  Form,
  Image,
  Input,
  Label,
  Title,
} from './styles';

export const SignIn = () => {
  return (
    <Container>
      <Image>
        <img src={logo} alt='Logo' width="300px" />
      </Image>
      <Content>
        <Form>
          <Title>LOGIN</Title>

          <Label htmlFor='username'>Usuário</Label>
          <Input id='username' placeholder='Digite seu usuário'></Input>

          <Label htmlFor='password'>Senha</Label>
          <Input type='password' id='password' placeholder='Digite sua senha'></Input>

          <div>
            <div>
              <Input id='rememberme' type="checkbox" />
              <Label htmlFor='rememberme'>Lembrar me</Label>
            </div>

            <a href='/'>Esqueceu sua senha?</a>
          </div>

          <Button>Entrar</Button>

        </Form>
      </Content>
    </Container>
  )
}
