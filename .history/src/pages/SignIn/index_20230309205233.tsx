import React from 'react';

import { FieldError, useForm } from 'react-hook-form';
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

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

export const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignIn>({
    resolver: yupResolver(schema)
  });

  const handleSignIn = (data: SignIn) => {
    setTimeout(() => {
      console.log(data);
    }, 0);
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
            errors={errors.username as FieldError}
            {...register('username')}
          />

          <Input
            type='password'
            label='Senha'
            placeholder='Digite sua senha'
            errors={errors.password as FieldError}
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
