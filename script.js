//javascript 
let buttonNum = 0;
let gridNumber = 16;
let selectedColor = '#000000';//starting color
let chosenColor = null; //colorPicker
//starting_point 
updateGridNum();

function hover() {
    if(chosenColor){
        this.id = chosenColor;
    }
}

function updateGridNum(){ // this updates the information of how big the grid is ex: 16 x 16 
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
    div.addEventListener('mouseover', hover);
    //div.addEventListener('mousedown', unhover );

    //adds eventlistner to the slider to display the grid format before updating
    const changingGridNumber = document.getElementById('slider');
    changingGridNumber.addEventListener('input', updateGridNum);

   
    })
}

function setGridValue(){ //gets how big the grid is on each side with a slider in html
    gridNumber = document.getElementById("slider").value;
    buttonNum = gridNumber;  
}

function hideBorder() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        const currentBorder = parseInt(box.style.borderWidth); // Get the current border width
        const newBorderWidth = currentBorder === 0 ? '1px' : '0px'; // Toggle between 0px and 1px
        box.style.border = `${newBorderWidth} solid black`;
    });
}
function update() {
    setGridValue();
    settingGrid();
    resetGrid();
    addDivs();
    updateGridNum();
    addEventListener();
    colorEvent();
}

/*const colorPicker = document.getElementById('colorPicker');
        colorPicker.addEventListener('input', function(event){
        selectedColor = event.target.value;
    });*/

    const grid = document.getElementById('updateGrid');
    grid.addEventListener('click', update);

    const hide = document.getElementById('hide_border');
        hide.addEventListener('click',hideBorder);
    

function colorEvent(){

    const colorButtons = document.querySelectorAll('.color');
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
        const colorId = button.id;
        console.log(colorId)
        chosenColor = colorId;
        console.log(chosenColor)
        })
    })

}