import React from "react"
import {Text,View,StyleSheet,Image,TouchableOpacity} from "react-native"

const pantallaCajaHerramientasCafe = ({navigation}) =>{
    return(
        <View style={styles.fondo}>
        <View style={styles.contenedorNavegacion}>
            <TouchableOpacity style={styles.flecha} onPress={()=>{navigation.navigate("homeTabCafe")}}>
                    <Image style={styles.tamañoFlecha} source={require('../../../assets/imagenes/flecha.png')}/>
            </TouchableOpacity>
        </View>
        <View>
            <Text>soy la pantalla de caja de herramientas cafe</Text>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    fondo:{
        marginTop:"6%",
        flex:1,
        backgroundColor:'#F1F1F5',
     },
     contenedorNavegacion: {
        marginTop:"1%",
        backgroundColor:"#9FA617",
        alignItems:"flex-start",
        flexDirection:"row",
        height:"10%"
      },
    tamañoFlecha:{
        marginLeft:"2%",
        width:"90%",
        height:"100%"
    },
    flecha:{
        marginLeft:"1%",
        width:"20%"
    }

})

export default pantallaCajaHerramientasCafe