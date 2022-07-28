import React,{Component} from 'react'
import { View, Text,StyleSheet,StatusBar,Alert } from 'react-native'
import params from './src/params'
import MineField from './src/Components/MineField'
import Header from './src/Components/Header'
import LavelSelection from './src/screens/LavelSelection'
import { 
    createMineBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed
} from './src/logica_jogo'

export default class App extends Component{

    constructor(props){
        super(props)
        this.state = this.createState()//é o estado q vai fazer a poha toda
    }

    minesAmount =()=>{//quantidade de moinas
        const cols = params.getColumnsAmount()//vai ir e pegar a quantidade de colunas 
        const rows = params.getRowsAmount()//vai pegar a quantidade de linhas
        return Math.ceil(rows * cols * params.difficultLevel)//vai aredondar o numero
    }
    

    createState = ()=>{
        const rows = params.getRowsAmount()
        const cols = params.getColumnsAmount()
        // console.warn('createState')
        return{
            board: createMineBoard(rows, cols, this.minesAmount()),
            won:false,
            lost:false,
            showLevelSelection:false,
        }
    }
    onOpenField = (row,column)=>{
        const board = cloneBoard(this.state.board)
        openField(board,row,column)//vai abrir as casas ate encontrar bombas 
        const lost = hadExplosion(board)
        const won = wonGame(board)
        if(lost){
            showMines(board)
            Alert.alert('GAME OVER!!')
        }
        if(won){
            Alert.alert('YOU WIN!!')
        }
        // console.warn('passou pelo openField')
        this.setState({board,lost, won})
    }
    onSelectField=(row,column)=>{
        const board = cloneBoard(this.state.board)
        invertFlag(board,row,column)
        const won = wonGame(board)

        if(won){
            Alert.alert('YOU WIN')
        }
        this.setState({board,won})
    }

    onLevelSelected = level=>{
        params.difficultLevel = level
        this.setState(this.createState())
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar/>
                <LavelSelection isVisible={this.state.showLevelSelection} 
                    onLevelSelected={this.onLevelSelected}
                    onCancel={()=>this.setState({ showLevelSelection:false })}/>
                
                <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)} 
                    onNewGame={()=>this.setState(this.createState())}
                    onFlagPress={()=>this.setState({showLevelSelection:true})}/>

                <View style={styles.board}>
                    <MineField board = {this.state.board} 
                        onOpenField={this.onOpenField} 
                        onSelectField={this.onSelectField}/>
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
