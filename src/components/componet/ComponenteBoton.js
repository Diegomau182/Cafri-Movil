import React,{useState,useEffect} from "react";
import * as Font from "expo-font"
import {StyleSheet,TouchableOpacity,View,Text,Image,Dimensions} from "react-native"

const { width, height } = Dimensions.get("window");
const ComponenteBoton = ({titulo,descripcion,imagen,callback}) =>{
   const  arrayiconos = [{"icono-caja-de-herrameintas-cafe" : require("../../../assets/imagenes/icono-caja-de-herrameintas-cafe.png")},
                        
                        ]
    const ubi = arrayiconos.find(element => element = imagen);
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const loadFontsAsync = async () => {
        await Font.loadAsync({
            PublicSans_BoldItalic: require(`../../../assets/fonts/PublicSans-BoldItalic.ttf`),
            PublicSans_ThinItalic: require(`../../../assets/fonts/PublicSans-ThinItalic.ttf`),
        }).then(() => {
        setFontsLoaded(true);
      });
    };
     // Cargar la fuente de manera asíncrona
    useEffect(() => {
    loadFontsAsync();
  }, []);
  if(fontsLoaded == false)
  {
    return (
        <View style={{flex: 1, justifyContent: "center", alignContent:"center",alignItems:"center"}}>
        <Text>Esperando...</Text>
      </View>
      )
  }
  else{
    return(
        <TouchableOpacity onPress={()=>{callback()}}>
            <View style={styles.conteiner}>
                <View style={styles.conteinerIcono}>
                <Image style={styles.estiloImagen} source={ubi[imagen]}/>
                </View>
                <View style={styles.conteinerDescripcion}>
                    <Text style={styles.titulo} >{titulo}</Text>
                    <Text style={styles.descripcion} >{descripcion}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    SpinnerInicio:{
        flex: 1, 
        justifyContent: "center"
      },
    conteiner:{
        flexDirection:"row",
        width:width*0.75,
        height:height * 0.17,
        marginTop:"5%",
        marginLeft:"3%"
    },
    conteinerIcono:{
        width:"30%",
        marginRight:"5%"
    },
    estiloImagen:{
        width:"100%",
        height:"80%"
    },
    conteinerDescripcion:{
        flexDirection:"column",
        marginTop:"2%"
    },
    titulo: {
        fontFamily:"PublicSans_BoldItalic",
        fontSize: 14,
      },
    descripcion:{
        fontFamily:"PublicSans_ThinItalic",
        fontSize: 12,
        width:width*0.70
    }

})

export default ComponenteBoton