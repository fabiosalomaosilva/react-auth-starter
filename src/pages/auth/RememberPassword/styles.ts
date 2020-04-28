import styled from 'styled-components';
import colors from './../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  img {
    width: 200px;
    align-self: center;
  }

  form {
    margin-top: -80px;
    display: flex;
    flex-direction: column;
    width: 450px;
    border: solid 1px #f0f0f0;
    border-radius: 4px;
    padding: 30px;
    background-color: #fff;
  }

  h3 {
    margin: 30px 0 10px 0;
    color: ${colors.text};
    align-self: center;
  }
  a {
    cursor: pointer;
    color: ${colors.primary};
    font-weight: 500;
    margin-top: 15px;
  }
`;
