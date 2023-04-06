import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  width: 100%;
  height: 46px;
  padding: 14px 28px;
  border-radius: 44px;
  border: none;
  color: #FFF;
  font-weight: 600;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.ligh};
  }

  &:disabled {
      cursor: unset;
      background: ${({ theme }) => theme.colors.primary.lighter};
  }

`;
