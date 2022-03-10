import React from "react";
import {Text,Button} from "react-native"
const pantallaInfoTITI =({navigation:{goBack},route})=>{
    const prueba = route.params.title
    console.log(prueba);
    return(
        <>
        <Text>
            {prueba}
            <Button onPress={() => goBack()} title="Go back from ProfileScreen" />
        </Text>
        </>
    );
}

export default pantallaInfoTITI