import React from 'react';
import {LoginScreen} from '../../Screens';

function LoginContainer({navigation}) {
  const handleNavigateBack = () => {
    navigation.goBack();
  };
  const handleNavigatetoRegister = () => {
    navigation.navigate('Register');
  };

  const handleNavigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <LoginScreen
      handleNavigateBack={handleNavigateBack}
      handleNavigatetoRegister={handleNavigatetoRegister}
      handleNavigateToHome={handleNavigateToHome}
    />
  );
}

export default LoginContainer;
