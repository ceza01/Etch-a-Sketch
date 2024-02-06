let changeGrid = 16;

function gridChange() {
    let userGrid = parseInt(prompt("How many squares per side you want? (100 max)"));
    changeGrid = userGrid
}


for (let i = 1; i <= 16; i++){
    for (let j = 1; j <= 16; j++){
        const newDiv = document.createElement('div');
        newDiv.id = 'grid';
        newDiv.classList.add('color');
        container.appendChild(newDiv);

    }
}

let colorHoover = ["purple"];
const grids = document.querySelectorAll(".color");

grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = colorHoover;
    })
});

