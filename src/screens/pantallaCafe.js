import React from "react";
import { StyleSheet, Image,View,Text} from "react-native";


const pantallaCafe = ({navigation}) =>{
    return(
        <><Text>Soy la pantalla de cafe</Text>
        </>
    )
}

const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor:'#F1F1F5',
     },
    contenedorImagen: {
        flex: 1,
        alignItems:"center",
        backgroundColor:"#9FA617"
      },
    estiloImagen:{
        width:"80%",
        height:"30%"
    },
    })

export default pantallaCafe