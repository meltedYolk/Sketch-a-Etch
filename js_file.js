let GRID_LENGTH, CARD_HEIGHT, FLEX_PERCENT;
let mouseHeldDown = false;
const CONTAINER_WIDTH = 600; // px, need to manually set = to css container width
const MAX_GRID_LENGTH = 100;

// creates lengthxlength grid, restricted to container width
// cards: attach to container, hover event changes color,
// intialize reset button
function createGrid() {
    let i, j;
    const container = document.querySelector(".container")
    for (i = 0; i < GRID_LENGTH; ++i) {
        for(j = 0; j < GRID_LENGTH; ++j) {
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.height = CARD_HEIGHT + "px";
            card.style.flex = "1 0 " + FLEX_PERCENT + "%";
            card.addEventListener("mouseover", () => {
                if (mouseHeldDown)
                    card.style.backgroundColor = "blue";
            });
            card.addEventListener("click", () => {
                if(mouseHeldDown)
                    mouseHeldDown = false;
                else
                    mouseHeldDown = true;
            });
            container.appendChild(card);
        }
    }
    intializeResetBtn();
}

// user inputs grid length, calc card's height and flex
function promptGridLength() {
    do {
        GRID_LENGTH = parseInt(prompt("choose a grid length 1-100", 16));
        CARD_HEIGHT = CONTAINER_WIDTH / GRID_LENGTH;
        FLEX_PERCENT = (CARD_HEIGHT / CONTAINER_WIDTH) * 100;
    } while(GRID_LENGTH > MAX_GRID_LENGTH);
}

function intializeResetBtn() {
    const resetBtn = document.querySelector(".reset");
    resetBtn.addEventListener("click", () => {
        let cards = document.querySelectorAll(".card");
        cards.forEach((card) => {card.style.backgroundColor = "whitesmoke";});
    });
}

promptGridLength();
createGrid();