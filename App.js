import React,{Component} from 'react'
import { View, Text,StyleSheet,StatusBar } from 'react-native'
import params from './src/params'
import Field from './src/Components/Field'
import MineField from './src/Components/MineField'
import { minasPlantadas } from './src/logica_jogo'

export default class App extends Component{

    constructor(props){
        super(props)
        this.state = this.createState()
    }

    qtdeMines =()=>{
        const linhas = params.getRowsAmount
        const colunas = params.getColumnsAmount
        return Math.ceil(linhas * colunas * params.difficultLevel)
    }

    createState = ()=>{
        const linhas = params.getRowsAmount()
        const colunas = params.getColumnsAmount()
        return{
            tabuleiro: minasPlantadas(linhas, colunas, this.qtdeMines())
        }
    }


    render(){
        return(
            <View style={styles.container}>
                <StatusBar/>
                <Text style={styles.welcome}>Iniciando Mines!</Text>
                <Text style = {styles.introduction}>
                    tamanho do campo: 
                    {params.getRowsAmount()}x{params.getColumnsAmount()}
                </Text>
                <View style={styles.board}>
                    <MineField tabuleiro = {this.state.tabuleiro}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:20
    },
    board:{
        alignItems:'center',
        backgroundColor:'#EEE'
    }

})
