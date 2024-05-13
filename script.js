let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let msgContainer= document.querySelector(".msg_container");
let msg = document.querySelector("#msg");


let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"; //player O
            turnO = false;

        }
        else {
            box.innerText = "X"; //player X
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if( count== 9 && !isWinner){
            gameDraw();
        }

    });
});

const gameDraw =() =>{
    msg.innerText = " Game is a Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = (winner) => {
    for(let box of boxes){
        box.disabled = true;
        box.innerText = "";
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
        box.innerText = "";
    }
};

function showWinner(winner) {
    msg.innerHTML = `CONGRATULATIONS!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos2 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return true;
            }
        }
    }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

