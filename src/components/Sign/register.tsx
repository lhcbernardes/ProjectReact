import React from 'react';
import { Route } from 'react-router-dom';
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

type UserSubmitForm = {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};

const Register: React.FC = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Nome completo é necessario'),
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
    console.log(JSON.stringify(data, null, 2));
  };

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
                    {...register('fullname')}
                    className={errors.fullname ? 'is-invalid' : ''}
                  />
                  <div className="invalid-feedback">{errors.fullname?.message}</div>
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
