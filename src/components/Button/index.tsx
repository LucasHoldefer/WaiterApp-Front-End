import { ButtonContainer } from './styles';

interface ButtonProps {
  children: string;
  disabled: boolean;
}

export function Button({ children, disabled }: ButtonProps) {
  return (
    <ButtonContainer disabled={disabled} onClick={() => alert('click')}>
      {children}
    </ButtonContainer>
  );
}
