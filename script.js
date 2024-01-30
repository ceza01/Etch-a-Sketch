/*const div = document.createElement("div");
div.id = "grid";
container.appendChild(div);*/

// create 16x16 divs
for (let i = 1; i <= 16; i++){
    for (let j = 1; j <= 16; j++){
        const newDiv = document.createElement('div');
        newDiv.id = 'grid';
        newDiv.classList.add('color');
        container.appendChild(newDiv);

    }
}


let colorHoover = ["pink", "purple", "red", "yellow"];
const grids = document.querySelectorAll(".color");

grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = colorHoover[(Math.floor(Math.random() * colorHoover.length))];
    })
    
});
