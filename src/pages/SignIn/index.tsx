import React, { useState } from 'react';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(username, password, remember);
  }

  return (
    <Container>
      <Image>
        <img src={logo} alt='Logo' width="300px" />
      </Image>
      <Content>
        <Form>
          <Title>LOGIN</Title>

          <Label htmlFor='username'>Usuário</Label>
          <Input
            id='username'
            placeholder='Digite seu usuário'
            onChange={(event) => { setUsername(event.target.value) }}
            value={username}
          />

          <Label htmlFor='password'>Senha</Label>
          <Input
            type='password'
            id='password'
            placeholder='Digite sua senha'
            onChange={(event) => { setPassword(event.target.value) }}
            value={password}
          />

          <div>
            <div>
              <Input
                id='rememberme'
                type="checkbox"
                onChange={() => { setRemember(state => !state) }}
                checked={remember}
              />
              <Label htmlFor='rememberme'>Lembrar me</Label>
            </div>

            <a href='/'>Esqueceu sua senha?</a>
          </div>

          <Button onClick={(event) => handleSubmit(event)}>Entrar</Button>

        </Form>
      </Content>
    </Container>
  )
}
