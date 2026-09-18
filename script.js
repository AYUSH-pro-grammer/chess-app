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
        square.dataset.row = row;
        square.dataset.col = col;

        square.dataset.position = String.fromCharCode(97, col) + (8- row);


        
        if ((row + col) % 2 === 0){
            square.classList.add("light")
        } else {
            square.classList.add("dark")
        }

        const piece = board[row][col]

        if (piece){
            square.textContent = symbols[piece.color][piece.type];
        }

        if (selected && selected.row === row && selected.col === col){
            square.classList.add("selected")
        }


        square.addEventListener("click", ()=>{
            const row = Number(square.dataset.row);
            const col = Number(square.dataset.col);

            const piece = board[row][col]

            console.log(piece);

            if (!piece){
                return;
            } 

            selected = {
                row: row,
                col: col 
            };

            drawBoard();
        })



        boardElement.appendChild(square);

        
    }
}
}



createBoard()
drawBoard()