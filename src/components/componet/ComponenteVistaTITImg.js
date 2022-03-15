import React from "react"
import { Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";

const ComponenteVistaTITImg =({title,title2,recursoUno,info, recursoDos})=>{
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
                <Text style={styles.info}>
                    {info}
                </Text>
                
                {title2 ? 
                <Text Text style={styles.titulo}>
                    {title2}
                </Text>
                : 
                  <Text> </Text>}

                <Image style={styles.rec} source={recursoUno}/>
                <Image style={styles.rec} source={recursoDos}/>
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
        justifyContent:"center",
        textAlign:"center"
    },
    contenedortitulo:{
        marginLeft:"5%",
        marginTop:"5%",
        width:"90%",
        height:"5%",
        alignItems:"center",

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
        marginRight:"5%",
        alignItems:"center"

    },
    rec:{
        width:"90%",
        height:"22%",
        marginTop: "5%"
    },
})

export default ComponenteVistaTITImg