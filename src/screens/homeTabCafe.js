import React from "react"
import { StyleSheet,Image,View} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import pantallaApps from "./pantallaApps";
import pantallaCafe from "./pantallaCafe";


const Tab = createBottomTabNavigator();
const homeTabCafe =({navigation})=>{
    return(
        <View style={styles.fondo}>
            <View style={styles.contenedorImagen}>
                <Image style={styles.estiloImagen} source={require('../../assets/imagenes/CafriLogoVacio.png')}/>
                    <Tab.Navigator>
                        <Tab.Screen name="Biblioteca" component={pantallaCafe}/>
                        <Tab.Screen name="Apps" component={pantallaApps}/>
                    </Tab.Navigator>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    fondo:{
        backgroundColor:'#F1F1F5',
     },
    contenedorImagen: {
        backgroundColor:"#9FA617"
      },
    estiloImagen:{
        width:"80%",
        height:"30%"
    },
    })
export default homeTabCafe

