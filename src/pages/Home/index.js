import React, {useContext} from 'react';
import {Text, View, Button, Alert, Image} from 'react-native';
import AuthContext from '../../contexts/auth';





function Home ({navigation}) {
    const {logout, usuario} = useContext(AuthContext);

    function handlerLogout(){
        logout();
    }
    return (
        <View>
            <Text>ESSA É A TELA Principal</Text>
            <Button 
            title='IR PARA DETALHES'
            onPress= {()=> navigation.navigate("Details")}/>
            <Button 
            title="logout"
            onPress={handlerLogout}>
              
            </Button>
        </View>
    );

}


export default Home;