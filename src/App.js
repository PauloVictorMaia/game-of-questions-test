import 'react-native-gesture-handler';
import React from 'react';
import UnloggedRoutes from './routes/routes';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <UnloggedRoutes />
    </NavigationContainer>
  );
};

export default App;
