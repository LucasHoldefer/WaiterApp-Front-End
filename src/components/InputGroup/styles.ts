import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  span {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;


export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    position: absolute;
    right: 0;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    background: transparent;
  }
`;
