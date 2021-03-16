import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginOrRegister from '../pages/login/login-or-register';
import Login from '../pages/login/login';
import Register from '../pages/login/register';
import Index from '../pages/index';
import QuestionScreen from '../pages/question-screen';
import Results from '../pages/results';

const Stack = createStackNavigator();

const UnloggedRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="LoginOrRegister">
      <Stack.Screen
       name="LoginOrRegister"
       component={LoginOrRegister}
       options={{ headerShown: false }}
      />
      <Stack.Screen
       name="Login"
       component={Login}
       options={{
         title:'Sin In',
         headerStyle:{
           backgroundColor: '#033464',
         },
         headerTintColor: '#fff',
       }}
      />
      <Stack.Screen
       name="Register"
       component={Register}
       options={{
         title: 'Sin Up',
         headerStyle:{
          backgroundColor: '#033464',
        },
        headerTintColor: '#fff',
       }}
      />
      <Stack.Screen
       name="Index"
       component={Index}
       options={{
        title: 'Dev Mobile',
        headerStyle:{
         backgroundColor: '#033464',
       },
       headerTintColor: '#fff',
      }}
      />
      <Stack.Screen
       name="QuestionScreen"
       component={QuestionScreen}
       options={{ headerShown: false }}
      />
      <Stack.Screen
       name="Results"
       component={Results}
       options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default UnloggedRoutes;
