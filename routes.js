// Inicio da Configuração
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// Final da Configuração


// Importaçao das paginas
import Home from './src/pages/Home';
import Details from './src/pages/Details';
//Fim


// Criando o componente de tabs
function Tabs() {
    return (
        <Tab.Navigator>

            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    title: "Pagina Principal!",
                    headerStyle: {
                        backgroundColor: 'crimson'
                    }
                }}>
            </Stack.Screen>

            <Stack.Screen name='Details' component={Details}
                options={{
                    title: "DETALHES",
                    headerStyle: {
                        backgroundColor: 'crimson'
                    }
                }}>
            </Stack.Screen>
        </Tab.Navigator>
    )
}

// Criando os componentes que tera toda a rota da aplicacao
export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{
                        title: "TELA DE LOGIN!",
                        headerStyle: {
                            backgroundColor: 'crimson'
                        }
                    }}>
                </Stack.Screen>

                <Stack.Screen name='Details' component={Tabs}
                    options={{
                        title: "DETALHES",
                        headerStyle: {
                            backgroundColor: 'crimson'
                        }
                    }}>
                </Stack.Screen>
            </Stack.Navigator>


        </NavigationContainer>

    );
}
