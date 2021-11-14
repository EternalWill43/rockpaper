const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerscore = document.querySelector(".player");
const computerscore = document.querySelector(".computer");
const computerimg = document.querySelector("#compcard");
var p = 0;
var c = 0;
const winner = document.createElement('div');
winner.setAttribute('class', 'winning');
winner.textContent = "NICE U WON";
const contain = document.querySelector('.container');
const loser = document.createElement('div');
loser.setAttribute('class', 'winning');
loser.textContent = "YOU LOSE, RETARD";
const tieer = document.createElement('div');
tieer.setAttribute('class', 'winning');
tieer.textContent = "IT'S A TIE";

rock.addEventListener("click", () => {playround('rock');}, true);
paper.addEventListener("click", () => {playround('paper')}, true);
scissors.addEventListener("click", () => {playround('scissors')}, true);

function playround(choice) {
    let rando = Math.floor(Math.random() * 3);
    if (choice == 'rock') {
        rock.setAttribute('style', 'background-color: green;');
        if (rando == 0) {
            computerimg.setAttribute('src', 'images/rock.png');
            contain.appendChild(tieer);
            tieer.addEventListener("click", () => {
                rock.removeAttribute('style', 'background-color');
                paper.removeAttribute('style', 'background-color');
                scissors.removeAttribute('style', 'background-color');
                tieer.remove();
            });
        } else if (rando == 1) {
            computerimg.setAttribute('src', 'images/paper.png');
            contain.appendChild(loser);
            c += 1;
            computerscore.textContent = c;
            loser.addEventListener("click", () => {
                rock.removeAttribute('style', 'background-color');
                paper.removeAttribute('style', 'background-color');
                scissors.removeAttribute('style', 'background-color');
                loser.remove();
            });
        } else {
            computerimg.setAttribute('src', 'images/scissors.png');
            contain.appendChild(winner);
            p += 1;
            playerscore.textContent = p;
            winner.addEventListener("click", () => {
                rock.removeAttribute('style', 'background-color');
                paper.removeAttribute('style', 'background-color');
                scissors.removeAttribute('style', 'background-color');
                winner.remove();
            });
        }
    } else if (choice == 'paper') {
        paper.setAttribute('style', 'background-color: green;');
        if (rando == 0) {
            computerimg.setAttribute('src', 'images/rock.png');
            contain.appendChild(winner);
            p += 1;
            playerscore.textContent = p;
            winner.addEventListener("click", () => {
                rock.removeAttribute('style', 'background-color');
                paper.removeAttribute('style', 'background-color');
                scissors.removeAttribute('style', 'background-color');
                winner.remove();
            });
        } else if (rando == 1) {
            computerimg.setAttribute('src', 'images/paper.png');
            contain.appendChild(tieer);
            tieer.addEventListener("click", () => {
                rock.removeAttribute('style', 'background-color');
                paper.removeAttribute('style', 'background-color');
                scissors.removeAttribute('style', 'background-color');
                tieer.remove();
            });
        } else {
            computerimg.setAttribute('src', 'images/scissors.png');
            contain.appendChild(loser);
            c += 1;
            computerscore.textContent = c;
            loser.addEventListener("click", () => {
                rock.removeAttribute('style', 'background-color');
                paper.removeAttribute('style', 'background-color');
                scissors.removeAttribute('style', 'background-color');
                loser.remove();
            });
        }

    } else if (choice == 'scissors') {
        scissors.setAttribute('style', 'background-color: green;');
        if (rando == 0) {
            computerimg.setAttribute('src', 'images/rock.png');
            contain.appendChild(loser);
            c += 1;
            computerscore.textContent = c;
            loser.addEventListener("click", () => {
                rock.removeAttribute('style', 'background-color');
                paper.removeAttribute('style', 'background-color');
                scissors.removeAttribute('style', 'background-color');
                loser.remove();
            });
        } else if (rando == 1) {
            computerimg.setAttribute('src', 'images/paper.png');
            contain.appendChild(winner);
            p += 1;
            playerscore.textContent = p;
            winner.addEventListener("click", () => {
                rock.removeAttribute('style', 'background-color');
                paper.removeAttribute('style', 'background-color');
                scissors.removeAttribute('style', 'background-color');
                winner.remove();
            });
        } else {
            computerimg.setAttribute('src', 'images/scissors.png');
            contain.appendChild(tieer);
            tieer.addEventListener("click", () => {
                rock.removeAttribute('style', 'background-color');
                paper.removeAttribute('style', 'background-color');
                scissors.removeAttribute('style', 'background-color');
                tieer.remove();
            });
        }
    }
}





