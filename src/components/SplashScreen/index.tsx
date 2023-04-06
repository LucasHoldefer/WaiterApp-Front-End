import { Container } from './styles';
import logo from './../../assets/images/logo-vertical.svg';

export function SplashScreen() {

  return (
    <>
      <Container>
        <img src={logo} alt="logo" />
      </Container>
    </>
  );
}
