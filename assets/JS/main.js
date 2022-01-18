

// ==========Skills JavaScript code====================

const content = document.getElementById('content');
const skillBtn = document.getElementById('show-more');

skillBtn.onclick = function () {
    if(content.className == 'open') {
        //shrink the box
        content.className = "";
    }
    else {
        //expand the box
        content.className = "open";
    }
};

// ==========Qualification JavaScript code====================

const workBtn = document.querySelector('#qualification2');
const containerRight = document.querySelector('#container-2');
const educationBtn = document.querySelector('#qualification1');
const containerLeft = document.querySelector('#container-1');

workBtn.addEventListener('click', mySwitching1);
    
function mySwitching1 (e) {
    e.preventDefault();

    containerRight.classList.remove('hide');
    containerLeft.classList.add('hide');
}

educationBtn.addEventListener('click', mySwitching2);
    
function mySwitching2 (e) {
    e.preventDefault();

    containerLeft.classList.remove('hide');
    containerRight.classList.add('hide');
}