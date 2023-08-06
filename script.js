//javascript 

function hover() {
    div.style.cssText = "background-color: green";
}

function fade() {
    document.getElementById('div').style.animation = 'fade 3s 2 '
}
   
    for(i = 0;i < 256; i++){
        const container = document.querySelector('.container');
        const newDiv = document.createElement('div');

        container.appendChild(newDiv);
    }

    document.querySelector('#div').addEventListener('mouseover', hover())
    document.querySelector('#div').addEventListener('mouseout', fade())
