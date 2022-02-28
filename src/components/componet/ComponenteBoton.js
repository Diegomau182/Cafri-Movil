import React from "react";
import {StyleSheet,TouchableOpacity,View,Text,Image} from "react-native"
const ComponenteBoton = ({titulo,descripcion,imagen,callback}) =>{
    return(<>
        <TouchableOpacity onPress={()=>{callback()}}>
            <View style={styles.conteiner}>
                <View style={styles.conteinerIcono}>
                    <Image source={{uri:``}}/>
                </View>
                <View style={styles.conteinerDescripcion}>
                    <Text>{titulo}</Text>
                    <Text>{descripcion}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </>)
}

const styles = StyleSheet.create({
    conteiner:{
        flexDirection:"row",
        width:"100%",
        height:"25%",
        marginBottom:"3%"
    },
    conteinerIcono:{
        width:"50%"
    },
    estiloImagen:{
        width:"50%",
        height:"50%"
    },
    conteinerDescripcion:{
        flexDirection:"column"  
    }
})

export default ComponenteBoton