import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SinIn from '../pages/login/sin-in';
import ToPlay from '../pages/login/to-play';
import Index from '../pages/index';
import QuestionScreen from '../pages/question-screen';
import Results from '../pages/results';

const Stack = createStackNavigator();

const UnloggedRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="LoginOrRegister">
      <Stack.Screen
       name="SinIn"
       component={SinIn}
       options={{ headerShown: false }}
      />
      <Stack.Screen
       name="ToPlay"
       component={ToPlay}
       options={{ headerShown: false }}
      />
      <Stack.Screen
       name="Index"
       component={Index}
       options={{
        title: '',
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
