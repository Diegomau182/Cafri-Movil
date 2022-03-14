import React from "react"
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const ComponenteVistaT =({title,info})=>{
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
        <View style={styles.fondo}>
            <View style={styles.contenedortitulo}>
                <Text style={styles.titulo}>
                    {title}
                </Text>
            </View>
            <View style={styles.contenedorInfo}>
                <Text style={styles.info}>
                    {info}
                </Text>
            </View>
        </View>
      </Page>
    </Document>
    )
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
    },
    contenedorInfo:{
        marginLeft:"5%",
        marginRight:"5%"
    }
})

export default ComponenteVistaT