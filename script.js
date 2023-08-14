//javascript 
 let buttonNum = 0;
 let gridNumber = 16;




    
function click() {
    this.classList.add('hoveringDiv')
}

function unclick(){
    this.classList.remove('hoveringDiv');
}

function updateGridNum(){
    const Num = document.getElementById('buttonNum');
    Num.innerHTML = buttonNum + ' X ' + buttonNum;
}
function settingGrid(){//telling css how many boxes per row  and column
    document.getElementById('grid').style.gridTemplateColumns= `repeat(${gridNumber}, 1fr)`;
    document.getElementById('grid').style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
}

function resetGrid() {// while loop to reset the grid
    const container = document.getElementById('grid');
        while(container.firstChild){
            container.removeChild(container.firstChild); 
        }
}

function addDivs(){ // for loop to add divs into the grid
    const container = document.getElementById('grid')
    for(i = 0;i < (gridNumber * gridNumber); i++){
            const newDiv = document.createElement('div');
            newDiv.classList.add('box');
            container.appendChild(newDiv);
        }
}

function addEventListener(){//addes eventlisteners to the divs 
    const divs = document.querySelectorAll('.box');
    divs.forEach((div) => {
    div.addEventListener('mouseover', click);
    div.addEventListener('mousedown', unclick );
    })
}

function setGridValue(){
    gridNumber = document.getElementById("slider").value;
    buttonNum = gridNumber;  
}
function setGrid() {
    setGridValue();
    settingGrid();
    resetGrid();
    addDivs();
    updateGridNum();
    addEventListener();
}

    const colorPicker = document.getElementById('colorPicker');
    colorPicker.addEventListener('input', function(event){
        const selectedColor = event.target.value;
        document.documentElement.style.setProperty('--hover-color', selectedColor)
    });

    const grid = document.getElementById('updateGrid');
    grid.addEventListener('click', setGrid);


    

    