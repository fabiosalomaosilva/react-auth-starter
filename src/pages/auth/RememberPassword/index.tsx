import React from 'react';
import {Container} from './styles';
import {Link} from 'react-router-dom';
import {BotaoPrimary, Input} from '../../../styles/createGlobalStyle';

const RememberPassword: React.FC = () => {
  return (
    <Container>
      <form>
        <img src={require('../../../assets/iconeVerde512.png')} />
        <h3>Informe o seu e-mail</h3>
        <Input type="email" name="email" placeholder="Informe seu e-mail" />
        <BotaoPrimary type="submit">ENVIAR NOVA SENHA</BotaoPrimary>
        <Link to="/">Esqueci a senha</Link>
      </form>
    </Container>
  );
};

export default RememberPassword;
