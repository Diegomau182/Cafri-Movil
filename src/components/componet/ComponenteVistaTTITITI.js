import React from "react"
import { Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";

const ComponenteVistaTTITITI =({title, titleTwo, recursoUno, info, infoSecond, infoThird, infoQuarter, recursoDos, recursoTres})=>{
    return(
        <Document>
          <Page
            size="A4"
          >
            <View>
             <View style={styles.contenedortitulo}>
                <Text style={styles.titulo}>
                    {title}
                </Text>
            </View>
            <View style={styles.contenedorInfo}>
                
                <Text style={styles.info}>
                    {info}
                </Text>

                <View style={styles.contenedortitulo}>
                    <Text style={styles.titulo}>
                        {titleTwo}
                    </Text>
                </View>


                <Text style={styles.info}>
                    {infoSecond}
                    
                </Text>
                <Image style={styles.recurso} source={recursoUno}/>

                <Text style={styles.info}>
                    {infoThird}
                    
                </Text>

                <Image style={styles.recurso} source={recursoDos}/>

                <Text style={styles.info}>
                    {infoQuarter}
                </Text>
                <Image style={styles.recurso2} source={recursoTres}/>
            
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
    titulo:{
        fontSize: 14,
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center"
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
        fontSize:12,
        marginBottom:"3%",
        marginTop:"3%",
        color:"black"
    },
    contenedorInfo:{
        marginLeft:"5%",
        marginRight:"5%",
        alignItems:"center"

    },
    recurso:{
        width:"50%",
        height:"20%"
    },
    recurso2:{
        width:"50%",
        height:"50%",
        marginTop:"5%"
    }
})

export default ComponenteVistaTTITITI