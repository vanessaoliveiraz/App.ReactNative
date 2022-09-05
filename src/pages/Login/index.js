import React, { createContext, useContext } from 'react';
import { Alert, StyleSheet, View, Image } from 'react-native';

import Título from '../../components/Titulo';
import MeuInput from '../../components/Input';

import SuperButton from '../../components/SuperButton/index.js';

import AuthContext from '../../contexts/auth';


import LottieView from 'react-native-web-lottie';
export default function Login() {
  const { login } = useContext(AuthContext);

  const handlerLogin = () => {
    login();

  }

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay={true}
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'white'
        }}
        source={require('../../assets/computer 3.json')}
        loop={true}
      />
      <Título Titulo="Login" />
      <MeuInput
        label="E-mail"
        placeholder="exemplo@exemplo.com" />

      <MeuInput
        label="Senha"
        placeholder="123456" />

      <SuperButton valor="Entrar"
        callback={handlerLogin}
      />

      <SuperButton valor="Esqueci a senha"
        callback={() => alert('Voce será redirecionado para uma tela de senha!')} />



    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


