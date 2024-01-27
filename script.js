/*const div = document.createElement("div");
div.id = "grid";
container.appendChild(div);*/


for (let i = 1; i <= 16; i++){
    for (let j = 1; j <= 16; j++){
        const newDiv = document.createElement('div');
        newDiv.id = 'grid';
        newDiv.classList.add('color-test');
        container.appendChild(newDiv);

    }
}




