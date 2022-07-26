import React from "react"
import {View,styleSheet} from "react-native"
import Field from "./Field"

export default props =>{
    const linhas = props.tabuleiro.map((linhas, r)=>{
        const colunas = linhas.map((field,c)=>{
            return <Field {...field} key={c}/>
        })
        return <View key={r} style={{flexDirection:'row'}}>{colunas}</View>
    })
    return <View style={{backgroundColor:'#AAA'}}>{linhas}</View>
}





