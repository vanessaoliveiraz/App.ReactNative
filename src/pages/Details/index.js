
import React from 'react';
import {Text, View, Button} from 'react-native';


function Details ({navigation}) {
    return (
        <View>
            <Text>Página Details</Text>
            <Button 
            title='IR PARA HOME'
            onPress = {() => navigation.navigate("Home")}/>
        </View>
    );

}


export default Details;