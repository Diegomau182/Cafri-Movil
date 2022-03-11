import React,{useState,useEffect} from "react";
import {Text,View,StyleSheet,Image,TouchableOpacity,ActivityIndicator, Dimensions,ScrollView} from "react-native"
import * as Font from "expo-font"
const { width, height } = Dimensions.get("window");

const pantallaInfoTITI =({navigation:{goBack},route})=>{
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const title = route.params.title
    const recursoUno = route.params.import
    const info = route.params.info
    const recursoDos = route.params.importSecond

    const loadFontsAsync = async () => {
        await Font.loadAsync({
            PublicSans_BoldItalic: require(`../../assets/fonts/PublicSans-BoldItalic.ttf`),
            PublicSans_Light: require('../../assets/fonts/PublicSans-Light.ttf')
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
        <View style={styles.fondo}>
            <View style={styles.contenedorNavegacion}>
            <TouchableOpacity style={styles.flecha} onPress={()=>{goBack()}}>
                <Image style={styles.tamañoFlecha} source={require('../../assets/imagenes/flecha.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.compartir}>
                <Image style={styles.tamañoCompatir} source={require('../../assets/imagenes/compatir.png')}/>
                <Text>Compartir</Text>
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.contenedortitulo}>
                <Text style={styles.titulo}>
                    {title}
                    <Image style={styles.recurso} source={recursoUno}/>
                </Text>
            </View>
            <ScrollView style={styles.contenedorInfo}>
                <Text style={styles.info}>
                    {info}
                </Text>
                <Image style={styles.recurso} source={recursoDos}/>
            </ScrollView>
        </>
    );
  }
}

const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor:'#F1F1F5',
    },
    contenedorNavegacion: {
        backgroundColor:"#9FA617",
        alignItems:"flex-start",
        flexDirection:"row",
        height:"15%"
    },
    tamañoFlecha:{
        marginLeft:"20%",
        width:"60%",
        height:"30%",
        marginTop: "70%"
    },
    flecha:{
        marginLeft:"1%",
        width:"20%",
        height:"100%",
    },
    tamañoCompatir:{
        marginLeft:"20%",
        width:"60%",
        height:"30%",
        marginTop: "70%"
    },
    compartir:{
        marginLeft:"60%",
        width:"20%",
        height:"100%",
        alignContent:"flex-end",
        flexDirection:"column",
        justifyContent:"center"
    },
    titulo:{
        fontFamily:"PublicSans_BoldItalic",
        fontSize: 20,
        alignItems:"center",
        justifyContent:"center"
    },
    contenedortitulo:{
        marginLeft:"5%",
        marginTop:"5%",
        width:"90%",
        height:"5%",
        alignItems:"center"
    },
    info:{
        textAlign:"center",
        fontSize:"18",
        fontFamily:"PublicSans_Light"
    },
    contenedorInfo:{
        marginLeft:"5%",
        marginRight:"5%"
    },
    recurso:{
        width:width * 0.80,
        height:height * 0.20
    }
})

export default pantallaInfoTITI