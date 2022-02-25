import React,{useState} from "react";
import { StyleSheet, View,TouchableOpacity ,Text,Image,Button} from "react-native";

const Home = ({navigation}) => {
const {} = useState()
    return (
        < >
            <View style={styles.fondo}>
                <View style={styles.contenedorImagen}>
                    <Image style={styles.estiloImagen} source={require('../../assets/imagenes/CafriLogo.png')}/>
                </View>
                <View style={styles.contenedorBotones}>
                <TouchableOpacity style={styles.fondoBotones} onPress={()=>{navigation.navigate("homeTabCafe")}}>
                        <Image style={styles.tamañoIconoCafe} source={require("../../assets/imagenes/icono-cafe.png")}/>
                        <Text>Café</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.fondoBotones} onPress={()=>{navigation.navigate("homeTabFrijol")}}>
                        <Image style={styles.tamañoIconoFrijol} source={require("../../assets/imagenes/Icono-Frijol.png")}/>
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
        marginTop:"10%"
    },
    tamañoIconoCafe:{
       width:"20%",
       height:"80%",
       marginLeft:"5%",
       marginRight:"20%",        
    },
    tamañoIconoFrijol:{
        width:"18%",
        height:"75%",
        marginLeft:"5%",
        marginRight:"20%",        
     }

});

export default Home