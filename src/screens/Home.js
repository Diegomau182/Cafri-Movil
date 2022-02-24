import React from "react";
import { StyleSheet, View,TouchableOpacity ,Text,Image,Button} from "react-native";
const Home = ({ navigation }) => {
    return (
        < >
            <View style={styles.fondo}>
                <View style={styles.contenedorImagen}>
                    <Image style={styles.estiloImagen} source={require('../../assets/imagenes/CafriLogo.png')}/>
                </View>
                <View style={styles.contenedorBotones}>
                    <TouchableOpacity style={styles.fondoBotones}>
                        <Image style={styles.tamañoIconos} source={require("../../assets/imagenes/Icono-Frijol.png")}/>
                        <Text>Frijol</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    contenedorImagen: {
        flex: 1,
        marginBottom:10,
        alignItems:"center"
      },
    contenedorBotones: {
        flex:2,
        alignItems:"center",
        marginTop:"10%"
    },
    estiloImagen:{
        width:"80%",
        height:"130%"
    },
    fondo:{
       flex:1,
       backgroundColor:'#F1F1F5',
    },
    fondoBotones:{
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:'#F38F1D',
        width:"70%",
        height:"18%",
        borderRadius:30,
    },
    tamañoIconos:{
       width:"20%",
       height:"80%",
       marginLeft:"5%",
       marginRight:"20%",        
    }

});

export default Home