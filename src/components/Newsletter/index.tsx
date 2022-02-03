import React, { useState } from 'react';
import api from '../../config/api';
import validateMail from '../../utils/validateMail';

import {
  Content,
  Container,
  Form,
  SuccessNews
} from './styles';

const Newsletter: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  const handleForm = async () => {
    setNameError(false);
    setEmailError(false);

    if (name === '') {
      setNameError(true);

      return null;
    }

    if (email === '') {
      setEmailError(true);

      return null;
    }

    if (!validateMail(email)) {
      setEmailError(true);

      return null;
    }

    const { data } = await api.post('/newsletter', { name, email });

    if (data.message) {
      setSuccess(true);
    }
  }

  return (
    <Content>
      <Container>
        {!success && (
          <>
            <h4>Participe de nossas news com promoções e novidades!</h4>

            <Form>
              <label>
                <input type="text" className={nameError ? 'error' : ''} placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} value={name} />
                <span>{nameError && 'Preencha com seu nome completo'}</span>
              </label>
              <label>
                <input type="email" className={emailError ? 'error' : ''} placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <span>{emailError && 'Preencha com um e-mail válido'}</span>
              </label>
              <button type="button" onClick={() => handleForm()}>Eu quero!</button>
            </Form>
          </>
        )}

        {success && (
          <SuccessNews>
            <h5>Seu e-mail foi cadastrado com sucesso!</h5>
            <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
            <button type="button" onClick={() => setSuccess(false)}>Cadastrar novo e-mail</button>
          </SuccessNews>
        )}
      </Container>
    </Content>
  )
}

export default Newsletter;