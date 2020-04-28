import React, {useState, FormEvent} from 'react';
import {Container} from './styles';
import {Link} from 'react-router-dom';
import {BotaoPrimary, Input} from '../../../styles/createGlobalStyle';
import {useAuth} from '../../../contexts/auth';

const Login: React.FC = () => {
  const {signed, signIn} = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log(signed);

  function handleSignIn(e: FormEvent) {
    e.preventDefault();
    signIn(username, password);
  }

  return (
    <Container>
      <form onSubmit={handleSignIn}>
        <img src={require('../../../assets/iconeVerde512.png')} />
        <h3>Informe os dados do usuário</h3>
        <Input
          type="email"
          placeholder="Informe seu e-mail"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <BotaoPrimary type="submit">ENTRAR</BotaoPrimary>
        <Link to="/remember">Esqueci a senha</Link>
      </form>
    </Container>
  );
};

export default Login;
