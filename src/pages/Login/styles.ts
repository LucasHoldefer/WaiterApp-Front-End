import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 66px;

  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 40px;

  font-weight: 500;

  span:nth-child(1) {
    font-weight: 500;
  }

  span:nth-child(2) {
    font-size: 32px;
    font-weight: 700;
  }

  small {
    font-size: 32px;
    font-weight: 400;
  }

  strong {
    font-weight: 700;
  }
`;

export const ContainerFormLogin = styled.div`
  width: 384px;
  height: 394px;
`;

export const InputsContainer = styled.div`
  margin-bottom: 40px;
`;


