//javascript 

    for(i = 0;i < 256; i++){
        const container = document.querySelector('.container');
        const newDiv = document.createElement('div');
        newDiv.classList.add('box')
        container.appendChild(newDiv);
    }
function hover() {
    this.classList.add('hoveringDiv')
}

function fade() {
    const element = this;
    setTimeout(function () {
        element.classList.remove('hoveringDiv');
    }, 500);
    
}

   
const divs = document.querySelectorAll('.box')
divs.forEach(div => {
    div.addEventListener('mouseover', hover);
    div.addEventListener('mouseout', fade);
  });

    