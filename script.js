const board = document.getElementById("chessboard")

const pieces = {
    white: [5,3,3,10,9,3,3,5],
    black: [-5,-3,-3,-10,-9,-3,-3,-5]
}

let alreadySelected = false;
let selectedSquare = null;

for (let row = 0; row < 8; row++){
    for (let col = 0; col < 8; col++){
        const square = document.createElement("div")

        square.addEventListener("click", function(){

            if (!square.textContent){
                return;
            }

            if (alreadySelected){

                if (selectedSquare == square){
                    square.classList.remove("select");
                    selectedSquare = null;
                    alreadySelected = false;

                } else {
                    selectedSquare.classList.remove("select");
                    square.classList.add("select");
                    selectedSquare = square
                    alreadySelected = true
                }



            } else {
                square.classList.add("select")
                alreadySelected = true
                selectedSquare = square
            }


        })

        square.classList.add("square");


        if ((row + col) % 2 == 0){
            square.classList.add("light")
        } else {
            square.classList.add("dark")
        }


        if (row == 0){
            square.textContent = pieces.black[col];
        } if (row == 1){
            square.textContent = "-1"
        } if (row == 6){
            square.textContent = "1"
        } if ( row == 7){
            square.textContent = pieces.white[col];
        }

        // adding squre to board 

        board.appendChild(square)
    }
}