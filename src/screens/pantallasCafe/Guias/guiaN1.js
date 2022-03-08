import React,{useState,useEffect} from "react";
import { StyleSheet,View,ActivityIndicator,Text,ScrollView,Image,Dimensions} from "react-native";
import * as Font from "expo-font"
import ComponenteListaGuias from "../../../components/componet/ComponenteListaGuias";
const { width, height } = Dimensions.get("window");


const guiaN1 = ({navigation}) =>{
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const loadFontsAsync = async () => {
        await Font.loadAsync({
            PublicSans_BoldItalic: require(`../../../../assets/fonts/PublicSans-BoldItalic.ttf`),
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
        <ActivityIndicator size="large" color="#E16837" />
      </View>
      )
  }
  else{
      return(
        <>
        <View style={styles.contenedorImagen}>
            <Image style={styles.estiloImagen} source={require('../../../../assets/imagenes/pruebafondoguia.jpg')}/>
        </View>
        <View style={styles.contenedortitulo}>
          <Text style={styles.titulo}>Guia#1: Control de calidad en el beneficiado húmedo del café.</Text>
        </View>
        <View style={styles.row}>
            <View></View>
            <ComponenteListaGuias titulo="Presentación"  numero="01" callback={()=>{navigation.navigate("cajaHerramientasCafe")}} />
        </View>
        </>
    )
  }
}

const styles = StyleSheet.create({
    row: {
        flex:1,
        flexDirection: "column",
        alignItems:"flex-start"
      },
    titulo:{
        fontFamily:"PublicSans_BoldItalic",
        fontSize: 20,
        textAlign:"center",
    },
    contenedortitulo:{
        width:"100%",
        height:"10%",
        justifyContent:"center",
        alignContent:"center",
    },
    estiloImagen:{
        width:width*1,
        height:height*0.30,

    },
    contenedorImagen:{
        alignItems:"center",
    },
    })

export default guiaN1
