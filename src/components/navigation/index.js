import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../../screens/Home'
import pantallaCafe from "../../screens/pantallaCafe";
import pantallaFrijol from "../../screens/PantallaFrijol";
import pantallaApps from "../../screens/pantallaApps"
import homeTabFrijol from "../../screens/homeTabFrijol";
import homeTabCafe from "../../screens/homeTabCafe";
import pantallaCajaHerramientasCafe from "../../screens/pantallasCafe/pantallaCajaHerramientasCafe";
import guiaN1 from "../../screens/pantallasCafe/Guias/guiaN1";
import pantallaInfoT from "../../screens/pantallaInfoT";
import pantallaInfoTI from "../../screens/pantallaInfoTI";
import pantallaInfoTITI from "../../screens/pantallaInfoTITI";
import pantallaImg from "../../screens/pantallaImg";
import pantallaTITImg from "../../screens/pantallaTITImg";

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
                <Stack.Screen name="guiaN1" component={guiaN1}/>
                <Stack.Screen name="pantallaInfoT" component={pantallaInfoT}/>
                <Stack.Screen name="pantallaInfoTI" component={pantallaInfoTI}/>
                <Stack.Screen name="pantallaInfoTITI" component={pantallaInfoTITI}/>
                <Stack.Screen name="pantallaImg" component={pantallaImg}/>
                <Stack.Screen name="pantallaTITImg" component={pantallaTITImg}/>
            </Stack.Navigator>   
        </NavigationContainer>
    )
}

export default Navigation;