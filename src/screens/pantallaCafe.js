import React from "react";
import { StyleSheet,View} from "react-native";
import ComponenteBoton from "../components/componet/ComponenteBoton"
const pantallaCafe = ({navigation}) =>{
    return(
        <View style={styles.row}>
        <ComponenteBoton titulo="Caja de herramientas para Cafe" descripcion="Guía y documentos para el cultivo del cafe" imagen="icono-caja-de-herrameintas-cafe" callback={()=>{navigation.nivagate("cajaHerramientasCafe")}} />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
      },
    })

export default pantallaCafe