import React from 'react'
import {View,StyleSheet} from 'react-native'

export default props =>{
    return(
        <View style={styles.container}>
            <View style={[styles.flag,props.bigger?styles.flagBigger:null]}/>
            <View style={[styles.flagPole,props.bigger?styles.flagPoleBigger:null]}/>
            <View style={[styles.base1,props.bigger?styles.base1Bigger:null]}/>
            <View style={[styles.base2,props.bigger?styles.base2Bigger:null]}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:2
    },
    flagPole:{
        position:'absolute',
        height:15,
        width:4,
        backgroundColor:'black',
        marginLeft:8,
        
    },
    flag:{
        position:'absolute',
        backgroundColor:'red',
        width:10,
        height:7,
        marginLeft:1,
        // marginTop:1
    },
    base1:{
        position:'absolute',
        width:16,
        height:5,
        backgroundColor:'black',
        marginTop:12,
        marginLeft:2
        
    },
    base2:{
        position:'absolute',
        backgroundColor:'black',
        width:12,
        height:3,
        marginTop:10,
        marginLeft:4

    },
    flagPoleBigger:{
        height:28,
        width:4,
        marginLeft:16
    },
    flagBigger:{
        height:10,
        width:14,
        marginLeft:3
    },
    base1Bigger:{
        height:4,
        width:12,
        marginTop:20,
        marginLeft:12
    },
    base2Bigger:{
        height:4,
        width:20,
        marginLeft:8,
        marginTop:24
    }
})