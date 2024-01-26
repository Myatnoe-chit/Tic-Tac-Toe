let boxes = document.querySelectorAll(".box");
let turn = "X";
let isGameOver = false;
let X = 0;
let O = 0;

boxes.forEach(box => {
    box.innerHTML = "";
    box.onclick = () => {
        if (!isGameOver && box.innerHTML === "") {
            box.innerText = turn;
            changeTurn();
            checkWin();
            checkDraw();
        }
    };
});

function checkWin() {
    let winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winConditions.length; i++) {
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if (v0 !== "" && v0 === v1 && v0 === v2) {
            isGameOver = true;
            document.querySelector("#result").innerHTML = (turn === "X" ? "O" : "X") + " wins!";
            document.querySelector("#reset").style.display = "inline";

        if(turn ==="X"){
            X++;
        }
        else if(turn === "O"){
            O++;
        }

        document.querySelector("#xWin").innerText = O;
        document.querySelector("#oWin").innerText = X;

            for (let j = 0; j < 3; j++) {
                boxes[winConditions[i][j]].style.backgroundColor = "rgb(10, 243, 154)";
            }
        }
    }
}


function checkDraw() {
    if (!isGameOver) {
        let isDraw = true;
        boxes.forEach(box => {
            if (box.innerHTML === "") isDraw = false;
        });

        if (isDraw) {
            isGameOver = true;
            document.querySelector("#result").innerHTML = "Draw!";
            document.querySelector("#reset").style.display = "inline";
        }
    }
}

function changeTurn() {
    turn = turn === "O" ? "X" : "O";
}

function resetGame() {
    isGameOver = false;
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#reset").style.display = "none";

    boxes.forEach(box => {
        box.innerHTML = "";
        box.style.removeProperty("background-color");
    });
}
