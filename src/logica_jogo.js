//array.fill(value, start, end)
const tabuleiro = (linhas, colunas)=>{
    return Array(linhas).fill(0).map((_,linhas)=>{//pega um array com quantidades de linhas adiciona valores 0 en todas as linhas e da um map para ignorar esse valor 0 e pegar somente o index dessas linhas 
        return Array(colunas).fill(0).map((_,colunas)=>{
            return{
                linhas,
                colunas,
                flagged:false,
                opened:false,
                mined:false,
                exploded:false,
                nearMined:0
            }
        })
    })
}

const esparamoMinas = (tabuleiro, qtdeMines)=>{
    const linhas = tabuleiro.length
    const colunas = tabuleiro[0].length
    let minasPlanted = 0
    
    while( minasPlanted < qtdeMines){
        const selectLinhas = parseInt(Math.random() * linhas, 10)
        const selectColunas = parseInt(Math.random()* colunas, 10)

        if(!tabuleiro[selectLinhas][selectColunas].mined){
            tabuleiro[selectLinhas][selectColunas].mined = true
            minasPlanted++
        }
    }
}

const minasPlantadas = (linhas, colunas, qtdeMinas)=>{
    const tabuleiroCompleto = tabuleiro(linhas,colunas)
    esparamoMinas(tabuleiroCompleto,qtdeMinas)
    return tabuleiroCompleto
}

export { minasPlantadas }