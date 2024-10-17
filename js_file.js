GRID_LENGTH = 16;
mouseHeldDown = false;

// creates lengthxlength grid 
// cards: attach to container, hover event changes color,
function createGrid() {
    let i, j;
    const container = document.querySelector(".container")
    for (i = 0; i < GRID_LENGTH; ++i) {
        for(j = 0; j < GRID_LENGTH; ++j) {
            const card = document.createElement("div");
            card.classList.add("card");
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
}

createGrid();