import { Dimensions } from "react-native";

const params = {
    blockSize:30,//tamanho do bloco
    borderSize:5,
    fontSize:15,
    headerRatio:0.15, //representa a proporcao do cabecalho
    difficultLevel:0.1,
    getColumnsAmount(){
        const width = Dimensions.get('window').width
        // console.warn('passou pelo coluns amount')
        return Math.floor( width / this.blockSize)
    },
    getRowsAmount(){
        const totalHeingth = Dimensions.get('window').height
        const borderHeight = totalHeingth *(1-this.headerRatio)
        // console.warn(Math.floor(borderHeight / this.blockSize))
        return Math.floor(borderHeight / this.blockSize)    //olhar depois pq dividido por 30
    }
}

export default params