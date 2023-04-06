import { useState } from 'react';
import { Button } from '../../components/Button';
import { InputGroup } from '../../components/InputGroup';
import { SplashScreen } from '../../components/SplashScreen';
import isEmailValid from '../../utils/isValidEmail';

import { Container, Header, ContainerFormLogin, InputsContainer } from './styles';

export default function Login() {
  const splashScreen = false;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (

    <Container>
      { splashScreen ? (
        <SplashScreen></SplashScreen>
      ) :
        (
          <ContainerFormLogin>
            <Header>
              <span>Bem-vindo(a) ao</span>
              <span>WAITER
                <small>APP</small>
              </span>
            </Header>

            <InputsContainer>
              <InputGroup
                label="E-mail"
                placeholder="Seu e-mail de acesso"
                type="email"
                value={email}
                onChangeInput={handleChangeEmail}
              />

              <InputGroup
                label="Senha"
                placeholder="Informe sua senha"
                type="password"
                value={password}
                onChangeInput={handleChangePassword}
              />
            </InputsContainer>

            <Button disabled={!isEmailValid(email)} >
              Fazer Login
            </Button>
          </ContainerFormLogin>
        )}


    </Container>
  );
}
