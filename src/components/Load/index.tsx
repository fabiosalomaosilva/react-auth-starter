import React from 'react';
import {ContainerCenter} from '../../styles/createGlobalStyle';
import Lottie from 'react-lottie';
import load from '../../assets/load.json';

const App: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: load,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <ContainerCenter>
      <Lottie options={defaultOptions} height={300} width={300} />
    </ContainerCenter>
  );
};

export default App;
