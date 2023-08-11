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

function unclick(){
     this.classList.remove('hoveringDiv');
}
function setGrid() {
    let gridNumber = document.getElementById("slider").value;
    //telling css how many boxes per row  and column
    document.getElementById('grid').style.gridTemplateColumns= `repeat(${gridNumber}, 1fr)`;
    document.getElementById('grid').style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
  
    // while loop to reset the grid
    const container = document.getElementById('grid')
    while(container.firstChild){
        container.removeChild(container.firstChild); 
    }

    // for loop to add divs into the grid
    for(i = 0;i < (gridNumber * gridNumber); i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('box')
        container.appendChild(newDiv);
    
    }
        //addes eventlisteners to the divs 
    const divs = document.querySelectorAll('.box');
    divs.forEach((div) => {
    div.addEventListener('mouseover', hover);
    //div.addEventListener('mouseout', fade);
    div.addEventListener('mousedown', unclick )

    
        });         
    
}
const holdDuration = 1000;

function startHold() {
    holdTimer = setTimeout(function(){
        this.classList.add('clickingDiv');
    }.bind(this), holdDuration);
}

function cancelHold() {
    clearTimeout(holdTimer);
}

    const grid = document.getElementById('updateGrid');
    grid.addEventListener('click', setGrid);


    

    