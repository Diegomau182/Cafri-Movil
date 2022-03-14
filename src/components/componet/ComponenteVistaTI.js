import React from "react"
import { Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";

const ComponenteVistaTI =({title,info,recurso, tituloDos, InfoDos})=>{
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
        <View style={styles.contenedorInfo}>
                <View style={styles.contenedortitulo}>
                    <Text style={styles.titulo}>
                        {title}
                    </Text>
                </View>
                <Text style={styles.info}>
                    {info}
                </Text>
                <Image style={styles.recurso} source={recurso}/>
                <View style={styles.contenedortitulo}>
                    <Text style={styles.titulo}>
                        {tituloDos}
                    </Text>
                 </View>
                <Text style={styles.info}>
                    {InfoDos}
                </Text>
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
    titulo:{
        fontSize: 20,
        textAlign:"center",
        fontWeight:"medium"
    },
    contenedortitulo:{
        marginLeft:"5%",
        marginTop:"5%",
        width:"90%",
        height:"5%",
    },
    info:{
        textAlign:"center",
        fontSize:"18",
        marginBottom:"3%",
        marginTop:"3%"
    },
    contenedorInfo:{
        marginLeft:"5%",
        marginRight:"5%",
    },
    recurso:{
        width:"100%",
        height:"25%",
        marginLeft:"10%"
    }
})

export default ComponenteVistaTI