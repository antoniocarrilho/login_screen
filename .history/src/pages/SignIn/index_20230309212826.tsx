import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import { Input } from '../../components/Input';

import logo from '../../assets/logo.svg';


import {
  Button,
  Container,
  Content,
  Form,
  Image,
  Title,
} from './styles';

type SignIn = {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const SignIn = () => {
  const { register, handleSubmit, formState } = useForm<SignIn>({
    resolver: yupResolver(schema)
  });

  const errors = formState.errors;

  const handleSignIn = (data: SignIn) => {
    console.log(data);
  }

  return (
    <Container>
      <Image>
        <img src={logo} alt='Logo' width="300px" />
      </Image>
      <Content>
        <Form onSubmit={handleSubmit(handleSignIn)}>
          <Title>LOGIN</Title>

          <Input
            label='Usuário'
            placeholder='Digite seu usuário'
            error={errors.username}
            {...register('username')}
          />

          <Input
            type='password'
            label='Senha'
            placeholder='Digite sua senha'
            error={errors.password}
            {...register('password')}
          />

          <div>
            <div>
              {/* <Input
                id='rememberme'
                type="checkbox"
                {...register('rememberme')}
              />
              <Label htmlFor='rememberme'>Lembrar me</Label> */}
            </div>

            <a href='/'>Esqueceu sua senha?</a>
          </div>

          <Button type='submit'>Entrar</Button>
        </Form>
      </Content>
    </Container>
  )
}

export { SignIn }