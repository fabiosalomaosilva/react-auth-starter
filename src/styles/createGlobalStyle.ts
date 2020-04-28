import styled, {createGlobalStyle} from 'styled-components';
import colors from '../styles/colors';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html, body, #root {
  height: 100%;
  background-color: ${colors.background};

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
}

`;

export const BotaoPrimary = styled.button`
  background-color: ${colors.primary};
  border: 0;
  border-radius: 4px;
  height: 40px;
  color: #fff;
  margin-top: 10px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const BotaoDanger = styled.button`
  background-color: ${colors.danger};
  border: 0;
  border-radius: 4px;
  height: 40px;
  color: #fff;
  margin-top: 10px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const BotaoSuccess = styled.button`
  background-color: ${colors.success};
  border: 0;
  border-radius: 4px;
  height: 40px;
  color: #fff;
  margin-top: 10px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const BotaoInfo = styled.button`
  background-color: ${colors.info};
  border: 0;
  border-radius: 4px;
  height: 40px;
  color: #fff;
  margin-top: 10px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const BotaoWarning = styled.button`
  background-color: ${colors.warning};
  border: 0;
  border-radius: 4px;
  height: 40px;
  color: #fff;
  margin-top: 10px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const BotaoSecondary = styled.button`
  background-color: ${colors.secondary};
  border: 0;
  border-radius: 4px;
  height: 40px;
  color: #fff;
  margin-top: 10px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const Input = styled.input`
  padding: 5px 15px;
  border-radius: 4px;
  height: 40px;
  border: solid 1px ${colors.input};
  margin-top: 10px;
`;
export const ContainerCenter = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
