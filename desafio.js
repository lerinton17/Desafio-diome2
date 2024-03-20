function analisaRank(numVitorias, numDerrotas){
    let saldoDeTriunfos = numVitorias - numDerrotas
    let rank = numVitorias - numDerrotas

    if(10>rank){
        console.log("O herói tem um saldo de vitórias de " + saldoDeTriunfos + " e está no nível ferro")
    }else if(21>rank){
        console.log("O herói tem um saldo de vitórias de " + saldoDeTriunfos + " e está no nível bronze")
    }else if(51>rank){
        console.log("O herói tem um saldo de vitórias de " + saldoDeTriunfos + " e está no nível prata")
    }else if (81>rank){
        console.log("O herói tem um saldo de vitórias de " + saldoDeTriunfos + " e está no nível ouro")
    }else if(91>rank){
        console.log("O herói tem um saldo de vitórias de " + saldoDeTriunfos + " e está no nível diamante")
    }else if(101>rank){
        console.log("O herói tem um saldo de vitórias de " + saldoDeTriunfos + " e está no nível Lendário")
    }else if(rank>100){
        console.log("O herói tem um saldo de vitórias de " + saldoDeTriunfos + " e está no nível Imortal")
    }
    

}

analisaRank(65, 5) 

//     node desafiofuncoes.js