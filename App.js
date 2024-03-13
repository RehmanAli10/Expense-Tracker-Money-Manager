// import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import Navigation from './src/Navigation';
import SplashScreen from './src/Screens/SplashScreen';

function App() {
  const [showSplashScreen, setSplashScreen] = useState(true);

  useEffect(function () {
    setTimeout(function () {
      setSplashScreen(false);
    }, 3000);
  }, []);

  return showSplashScreen ? <SplashScreen /> : <Navigation />;
}

export default App;
