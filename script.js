//javascript 





    
function hover() {
    this.classList.add('hoveringDiv')
}

function fade() {
    const element = this;
    setTimeout(function () {
        element.classList.remove('hoveringDiv');
    }, 500);
    
}
function setGrid() {
    let gridNumber = document.getElementById("slider").value;
    //telling css how many boxes per row  and column
    document.getElementById('grid').style.gridTemplateColumns= `repeat(${gridNumber}, 1fr)`;
    document.getElementById('grid').style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
  
    const container = document.getElementById('grid')
    while(container.firstChild){// while loop to reset the grid
        container.removeChild(container.firstChild); 
    }


    for(i = 0;i < (gridNumber * gridNumber); i++){ // for loop to add divs into the grid
        const container = document.querySelector('.container');
        const newDiv = document.createElement('div');
        newDiv.classList.add('box')
        container.appendChild(newDiv);
    }
}


    const grid = document.getElementById('updateGrid');
    grid.addEventListener('click', setGrid);


    const divs = document.querySelectorAll('.box')
    divs.forEach(div => {
        div.addEventListener('mouseover', hover);
        div.addEventListener('mouseout', fade);
    });

    