// ESSA PRECISA DE AUTENTICAÇÃO

import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


import Home from '../pages/Home';
import Details from "../pages/Details";

export default function AppRoutes() {
    return (
        
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home}/>

            <Tab.Screen name="Details" component={Details} />
        </Tab.Navigator>
    )
}