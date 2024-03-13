import React from 'react';
import WelcomeScreen from '../../Screens/WelcomeAndLoginScreens/WelcomeScreen';

function WelcomeContainer({navigation}) {
  const handleNavigatetoLogin = () => {
    navigation.navigate('Login');
  };
  const handleNavigatetoRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <WelcomeScreen
      handleNavigatetoLogin={handleNavigatetoLogin}
      handleNavigatetoRegister={handleNavigatetoRegister}
    />
  );
}

export default WelcomeContainer;
