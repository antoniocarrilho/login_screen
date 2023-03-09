import React from 'react';

import { useForm } from 'react-hook-form';

import logo from '../../assets/logo.svg';
import { Input } from '../../components/Input';

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

export const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignIn>();

  const handleSignIn = (data: any) => {
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
            errors={errors.username}
            {...register('username', { required: true })}
          />

          <Input
            type='password'
            label='Senha'
            placeholder='Digite sua senha'
            errors={errors.password}
            {...register('password', { required: true })}
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
