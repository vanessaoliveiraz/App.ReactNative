
import React, {useEffect} from 'react';
import Routes from './src/routes/routes';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/contexts/auth';


export default function App() {
  
  return (
    <NavigationContainer>
       
      <AuthProvider>
      <Routes></Routes>
      </AuthProvider>
    </NavigationContainer>
    
  
  );
}
