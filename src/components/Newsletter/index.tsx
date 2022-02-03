import React, { useState } from 'react';
import Swal from 'sweetalert2';
import api from '../../config/api';
import validateMail from '../../utils/validateMail';

import {
  Content,
  Container,
  Form
} from './styles';

const Newsletter: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleForm = async () => {
    if (name === '') {
      Swal.fire(
        'Ops.',
        'Campo nome é obrigatório',
        'error'
      )

      return null;
    }

    if (email === '') {
      Swal.fire(
        'Ops.',
        'Campo e-mail é obrigatório',
        'error'
      )

      return null;
    }

    if (!validateMail(email)) {
      Swal.fire(
        'Ops.',
        'Digite um e-mail válido!',
        'error'
      )

      return null;
    }

    const { data } = await api.post('/newsletter', { name, email });

    if (data.message) {
      Swal.fire(
        'Parabéns',
        'E-mail cadastrado com sucesso!',
        'success'
      )
    }
  }

  return (
    <Content>
      <Container>
        <h4>Participe de nossas news com promoções e novidades!</h4>

        <Form>
          <input type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} value={name} />
          <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email} />
          <button type="button" onClick={() => handleForm()}>Eu quero!</button>
        </Form>
      </Container>
    </Content>
  )
}

export default Newsletter;