let piece = "Peao";

switch (piece.toLowerCase()) {
    case "peao": {
        console.log("Anda uma casa - Duas no primeiro movimento")
        break;
    }
    case "cavalo": {
        console.log("Movimento em L - Movimento em Z")
        break;
    }
    case "torre": {
        console.log("Movimenta na coluna e na linha inteira")
        break;
    }
    case "bispo": {
        console.log("Movimenta na diagonal")
        break;
    }
    case "dama": {
        console.log("Movimenta em todas as direções")
        break;
    }
    case "rei": {
        console.log("Movimenta em todas as direções, mas apenas uma casa")
    }
    default: {
        console.log("peça invalida")
    }
}