import React from "react";
import { StyleSheet} from "react-native";
import ComponenteBoton from "../components/componet/ComponenteBoton"
import pantallaCajaHerramientasCafe from "./pantallaCajaHerramientasCafe";

const pantallaCafe = ({navigation}) =>{
    return(
        <>
            <ComponenteBoton titulo="Caja de herramientas para Cafe" descripcion="Guía y documentos para el cultivo del cafe" imagen="icono-caja-de-herrameintas-cafe" callback={()=>{navigation.nivagate("cajaHerramientasCafe")}} />
        </>
    )
}

const styles = StyleSheet.create({
    
    })

export default pantallaCafe