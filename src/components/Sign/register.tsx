import React, { useState } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import Login from './login';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  Container,
  Background,
  Left,
  Right,
  Form,
} from './styles';
import { registerApi } from '../../services/auth.service';
import { useAuth } from "../../context/auth";

type UserSubmitForm = {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
  acceptTerms?: boolean;
};

const Register: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setAuthTokens } = useAuth();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Nome completo é necessario'),
    email: Yup.string()
      .required('Email é necessario')
      .email('Email é invalido'),
    password: Yup.string()
      .required('Senha é necessario')
      .min(6, 'Senha deve ter no minimo 6 caracteres')
      .max(40, 'Senha não deve passar 40 caracteres'),
    confirmPassword: Yup.string()
      .required('Confirma Senha é necessaria')
      .oneOf([Yup.ref('password'), null], 'Confirma Senha são diferentes'),
    acceptTerms: Yup.bool().oneOf([true], 'Aceitar os termos é necessario')
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: UserSubmitForm) => {
    // console.log(JSON.stringify(data, null, 2));

    delete data['confirmPassword'];
    delete data['acceptTerms'];
    registerApi(data).then((result) => {
      if (result.status === 200) {
        setLoading(false);
        setAuthTokens(result.data.session);
        setLoggedIn(true);
      } else {
        setIsError(true);
        setLoading(false);
      }
    }).catch(e => {
      console.error(e)
      setIsError(true);
      setLoading(false);
    });
  };

  if (isLoggedIn) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      <Background>
        <Container>
          <Left>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <section >
                <div className="form-group">
                  <input
                    placeholder="Nome Completo"
                    type="text"
                    {...register('username')}
                    className={errors.username ? 'is-invalid' : ''}
                  />
                  <div className="invalid-feedback">{errors.username?.message}</div>
                </div>

                <div className="form-group">
                  <input
                    placeholder="Email"
                    type="text"
                    {...register('email')}
                    className={errors.email ? 'is-invalid' : ''}
                  />
                  <div className="invalid-feedback">{errors.email?.message}</div>
                </div>

                <div className="form-group">
                  <input
                    placeholder="Senha"
                    type="password"
                    {...register('password')}
                    className={errors.password ? 'is-invalid' : ''}
                  />
                  <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div className="form-group">
                  <input
                    placeholder="Confirme a Senha"
                    type="password"
                    {...register('confirmPassword')}
                    className={errors.confirmPassword ? 'is-invalid' : ''}
                  />
                  <div className="invalid-feedback">
                    {errors.confirmPassword?.message}
                  </div>
                </div>

                <div className="form-group checkbox-wrapper">
                  <input
                    type="checkbox"
                    {...register('acceptTerms')}
                    className="checkbox"
                  />
                  <label htmlFor="acceptTerms" className="checkbox-label">
                    Eu li os termos de aceite
                  </label>

                </div>
                <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
              </section>

              <button type="submit">Registrar</button>
              <div>Já tem uma conta?&nbsp;<a href="/">Login</a></div>
            </Form>
          </Left>
          <Right>
            <img src="logo192.png"></img>
            <h1>Faça seu registro na plataforma</h1>
          </Right>

        </Container>
      </Background>
      <Route exact={true} path="/" component={Login} />
    </>
  );
};

export default Register;
