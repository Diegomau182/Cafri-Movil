import React,{useState,useEffect} from "react";
import { StyleSheet,View,ActivityIndicator,Text,ImageBackground,Image,Dimensions,TouchableOpacity} from "react-native";
import {NavigationActions} from "react-navigation"
import * as Font from "expo-font"
import ComponenteListaGuias from "../../../components/componet/ComponenteListaGuias";
import Navigation from "../../../components/navigation";
const { width, height } = Dimensions.get("window");


const guiaN1 = ({navigation}) =>{
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const navigateToScreen = (route, params) => {
      const navigateAction = NavigationActions.navigate({
        routeName: route,
        params: params
      });
      navigation.dispatch(navigateAction);
      }
      
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
           
            <ImageBackground style={styles.estiloImagen} source={require('../../../../assets/imagenes/pruebafondoguia.jpg')}>
                <TouchableOpacity style={styles.flecha} onPress={()=>{navigation.navigate("cajaHerramientasCafe")}}>
                  <Image style={styles.tamañoFlecha} source={require('../../../../assets/imagenes/flecha.png')}/>
                </TouchableOpacity>
              </ImageBackground>
        </View>
        
        <View style={styles.contenedortitulo}>
          <Text style={styles.titulo}>Guia#1: Control de calidad en el beneficiado húmedo del café.</Text>
          <Image style={styles.pdf} source={require('../../../../assets/imagenes/pdf.png')}/>
          
        </View>
        <View style={styles.row}>
            <View></View>
            <ComponenteListaGuias titulo="Presentación"  numero="01" callback={()=>{navigation.navigate("pantallaInfoTI",{title:"hola soy presentacion"})}} />
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo="¿Qué es café de calidad?"  numero="02" callback={()=>{navigation.navigate("pantallaInfoTI",{title:"caja de herramientas"})}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo="Flujograma del café"  numero="03" callback={()=>{navigation.navigate("pantallaInfoTI",{title:"Flujograma cafe"})}}/>
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo="Porcentajes para medir la calidad del cae en el corte"  numero="04" callback={()=>{navigation.navigate("cajaHerramientasCafe")}} />
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo="Despulpado de café"  numero="05" callback={()=>{navigation.navigate("cajaHerramientasCafe")}} />
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo="Remoción de Mucilago/Fermentado"  numero="06" callback={()=>{navigation.navigate("cajaHerramientasCafe")}} />
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo="Secado de café"  numero="07" callback={()=>{navigation.navigate("cajaHerramientasCafe")}} />
            <View style = {styles.lineStyle}/>
            <ComponenteListaGuias titulo="Bibliografia"  numero="08" callback={()=>{navigation.navigate("cajaHerramientasCafe")}} />
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
        fontSize: 18,
        textAlign:"left",
        color:"#9FA617"
    },
    contenedortitulo:{
        width:"95%",
        height:"10%",
        justifyContent:"center",
        alignContent:"center",
        marginLeft: width*0.02,
        flexDirection:"row",
        marginTop:"2%"
    },
    estiloImagen:{
        width:width*1,
        height:height*0.30,

    },
    contenedorImagen:{
        alignItems:"center",
    },
    pdf:{
      width:width*0.20,
      height:height * 0.10,
    },
    tamañoFlecha:{
      marginTop:"2%",
      width:"20%",
      height:"14%",
      position:"absolute",
      shadowColor: 'white',
      shadowOffset: {width: 2, height: 3},
      shadowOpacity: 0.50,
      elevation: 1
    },
    flecha:{
      width:width*1,
        height:height*0.30,
    },
    lineStyle:{
      borderWidth: 0.1,
      borderheight:0.0002,
      width:"100%",
      borderColor:"#C2B1B1",
 }
    })

export default guiaN1
