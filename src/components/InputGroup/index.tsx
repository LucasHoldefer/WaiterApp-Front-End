import { Input } from '../Input';
import { Container, InputContainer } from './styles';
import eyeIcon from './../../assets/images/eye-icon.svg';
import { useState } from 'react';
import isEmailValid from '../../utils/isValidEmail';


interface InputGroupProps {
  label: string;
  placeholder: string;
  type: string;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}


export function InputGroup({ label, placeholder, type, onChangeInput, value }: InputGroupProps) {
  const [newType, setNewType] = useState<string | undefined>(type);

  function handleVisiblePassword() {
    setNewType((prevState) => {
      return prevState === 'password' ? 'text' : 'password';
    });
  }

  return (
    <Container>
      <span>{label}</span>
      <InputContainer>
        <Input placeholder={placeholder} type={newType} onChange={onChangeInput} />

        {type === 'password' && value && (
          <button onClick={handleVisiblePassword}>
            <img src={eyeIcon} />
          </button>
        )}
      </InputContainer>
    </Container>
  );
}
