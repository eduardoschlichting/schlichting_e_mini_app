const images = document.querySelector('#imgs');
const image = document.querySelectorAll('#imgs .header-img');
let navBar = document.querySelector('.nav-container');

let idimg = 0;

function carousel() {
    idimg++;

    if(idimg > image.length - 1) {
        idimg = 0; // back to the initial image
    }

    images.style.transform = `translateX(${-idimg * 100}%)`; // changes each image
    console.log('changing images');

}



setInterval(carousel, 4000);

