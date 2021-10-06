import React from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import Register from '../Register';
import {
  Container,
  Background,
} from './styles';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

type UserSubmitForm = {
  email: string;
  password: string;
};


const Login: React.FC = () => {
  let history = useHistory();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email é necessario')
      .email('Email digitado invalido'),
    password: Yup.string()
      .required('Senha necessaria')
      .min(6, 'Senha deve conter no minimo 6 caracteres')
      .max(40, 'Senha deve conter no maximo 40 caracteres'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: UserSubmitForm) => {
    
    history.push("/dashboard");

    console.log(JSON.stringify(data, null, 2));
  };
  return (
    <>
    <Background>
      <Container>
      <div className="left">
        <form onSubmit={handleSubmit(onSubmit)}>
          <section >
          <div className="form-group">
            <input 
              {...register('email')} 
              className={errors.email ? 'is-invalid' : ''}
              name="email" 
              type="email" 
              id="email" 
              placeholder="E-mail"
              />
               <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="form-group">
            <input 
              {...register('password')}
              className={errors.password ? 'is-invalid' : ''}
              name="password" 
              type="password" 
              id="password" 
              placeholder="Senha"/>
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
          </section>
          <a href="/forgot">Esqueci minha senha</a>
          <button type="submit">Entrar</button>
          <div>Não tem uma conta?&nbsp;<Link to="/register">Registre-se</Link></div>
        </form>
      </div>
      <div className="right">
            <img src="logo192.png"></img>
            <h1>Faça seu login na plataforma</h1>
          </div>
      </Container>
    </Background>
    <Switch>
        <Route exact path="/register" component={Register} />
      </Switch>
</>
  );
};

export default Login;