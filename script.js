const boardElement = document.getElementById("chessboard")


const symbols = {
    white: {
        king: "♔",
        queen: "♕",
        rook: "♖",
        bishop: "♗",
        knight: "♘",
        pawn: "♙"
    },
    black: {
        king: "♚",
        queen: "♛",
        rook: "♜",
        bishop: "♝",
        knight: "♞",
        pawn: "♟"
    }
}


let board = []
let currentTurn = "white";
let selected = null;
let gameOver = false

function createPiece(type, color){
    return {
        type: type,
        color: color
    };
}


function createBoard(){

    board = Array.from(
        { length: 8}, ()=> Array(8).fill(null)
    )

    board[0] = [
        createPiece("rook", "black"),
        createPiece("knight", "black"),
        createPiece("bishop", "black"),
        createPiece("queen", "black"),
        createPiece("king", "black"),
        createPiece("bishop", "black"),
        createPiece("knight", "black"),
        createPiece("rook", "black")
    ]

    // drawing pawns black

    for (let col = 0; col < 8; col++){
        board[1][col] = createPiece("pawn", "black")
    }

    // drawing pawns white 

    for (let col = 0; col < 8; col++){
        board[6][col] = createPiece("pawn", "white")
    }

    board[7] = [
        createPiece("rook", "white"),
        createPiece("knight", "white"),
        createPiece("bishop", "white"),
        createPiece("queen", "white"),
        createPiece("king", "white"),
        createPiece("bishop", "white"),
        createPiece("knight", "white"),
        createPiece("rook", "white")
    ]


}

function drawBoard(){
    boardElement.innerHTML = "";

    for (let row = 0; row<8; row++){

        for (let col = 0; col < 8; col++){

            const square = document.createElement("div");

        square.classList.add("square");
        
        if ((row + col) % 2 === 0){
            square.classList.add("light")
        } else {
            square.classList.add("dark")
        }

        const piece = board[row][col]

        if (piece){
            square.textContent = symbols[piece.color][piece.type];
        }

        boardElement.appendChild(square);

    }
}
}



createBoard()
drawBoard()