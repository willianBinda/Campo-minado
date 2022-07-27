import React,{Component} from 'react'
import { View, Text,StyleSheet,StatusBar,Alert } from 'react-native'
import params from './src/params'
import MineField from './src/Components/MineField'
import { 
    createMineBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines 
} from './src/logica_jogo'

export default class App extends Component{

    constructor(props){
        super(props)
        this.state = this.createState()
    }

    minesAmount =()=>{
        const cols = params.getColumnsAmount
        const rows = params.getRowsAmount
        return Math.ceil(rows * cols * params.difficultLevel)
    }

    createState = ()=>{
        const rows = params.getRowsAmount()
        const cols = params.getColumnsAmount()
        return{
            board: createMineBoard(rows, cols, this.minesAmount()),
            won:false,
            lost:false,
        }
    }
    onOpenField = (row,column)=>{
        const board = cloneBoard(this.state.board)
        openField(board,row,column)
        const lost = hadExplosion(board)
        const won = wonGame(board)
        if(lost){
            showMines(board)
            Alert.alert('GAME OVER!!')
        }
        if(won){
            Alert.alert('YOU WIN!!')
        }
        this.setState({board,lost, won})
    }


    render(){
        return(
            <View style={styles.container}>
                <StatusBar/>
                <Text style={styles.welcome}>Iniciando Mines!</Text>
                <Text style = {styles.introduction}>
                    tamanho do campo:# 
                    {params.getRowsAmount()}x{params.getColumnsAmount()}
                    #
                </Text>

                <View style={styles.board}>
                    <MineField board = {this.state.board} 
                        onOpenField={this.onOpenField}/>
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
