import React from "react"
import { Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";

const ComponenteVistaTITI =({title,recursoUno,info, recursoDos})=>{
    return(
        <Document>
          <Page
            size="A4"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <View style={styles.contenedortitulo}>
                <Text style={styles.titulo}>
                    {title}
                </Text>
            </View>
            <View style={styles.contenedorInfo}>
            <Image style={styles.recursoUno} source={recursoUno}/>
                <Text style={styles.info}>
                    {info}
                </Text>
                <Image style={styles.recursoDos} source={recursoDos}/>
            </View>
          </Page>
        </Document>
        )
}


const styles = StyleSheet.create({
    titulo:{
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
        marginBottom:"3%",
        marginTop:"3%",
        color:"black"
    },
    contenedorInfo:{
        marginLeft:"5%",
        marginRight:"5%"

    },
    recursoUno:{
        width:"95%",
        height:"22%",
        marginLeft:"12%"
    },
    recursoDos:{
        width:"90%",
        height:"25%",
        marginLeft:"17%"
    }
})

export default ComponenteVistaTITI