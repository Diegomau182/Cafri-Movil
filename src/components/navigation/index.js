import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../../screens/Home'
import pantallaCafe from "../../screens/pantallaCafe";
import pantallaFrijol from "../../screens/PantallaFrijol";
import pantallaApps from "../../screens/pantallaApps"
import homeTabFrijol from "../../screens/homeTabFrijol";
import homeTabCafe from "../../screens/homeTabCafe";
import pantallaCajaHerramientasCafe from "../../screens/pantallaCajaHerramientasCafe";

const Stack = createStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="homeTabCafe" component={homeTabCafe}/>
                <Stack.Screen name="homeTabFrijol" component={homeTabFrijol}/>
                <Stack.Screen name="pantallaCafe" component={pantallaCafe}/>
                <Stack.Screen name="pantallaFrijol" component={pantallaFrijol}/>
                <Stack.Screen name="pantallaApps" component={pantallaApps}/>
                <Stack.Screen name="cajaHerramientasCafe" component={pantallaCajaHerramientasCafe}/>
            </Stack.Navigator>   
        </NavigationContainer>
    )
}

export default Navigation;