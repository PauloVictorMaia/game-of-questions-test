import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginOrRegister from '../pages/login/login-or-register';
import Login from '../pages/login/login';
import Register from '../pages/login/register';
import Index from '../pages/index';
import QuestionScreen from '../pages/question-screen';

const Stack = createStackNavigator();

const UnloggedRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="LoginOrRegister">
      <Stack.Screen
       name="LoginOrRegister" 
       component={LoginOrRegister}
       options={{title:'Faça seu login ou registre-se'}}
      />
      <Stack.Screen 
       name="Login" 
       component={Login} 
       options={{title:'Faça seu login'}}
      />
      <Stack.Screen 
       name="Register" 
       component={Register} 
       options={{title: 'Registre-se'}}
      />
      <Stack.Screen 
       name="Index" 
       component={Index} 
       options={{title: 'DevMobile'}}
      />
      <Stack.Screen 
       name="QuestionScreen" 
       component={QuestionScreen} 
       options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default UnloggedRoutes;