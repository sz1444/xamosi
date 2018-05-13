var search = document.getElementById('search');
var btnLayout = document.querySelectorAll('.setting button');
var boxedImg = document.querySelectorAll('.setting li');
var body = document.querySelector('body');
var nav = document.querySelector('nav');
var btnPopup = document.querySelector('.btn-popup');
var bars = document.querySelector('.fa-bars');
var menuUl = document.querySelector('nav ul');

bars.addEventListener('click', menu);

search.addEventListener('click', searchDisplay);

for (var j = 0; j < btnLayout.length; j++) {
    btnLayout[j].addEventListener('click', layoutSetting);
}

for (var x = 0; x < boxedImg.length; x++) {
    boxedImg[x].addEventListener('click', bgChange);
}
btnPopup.addEventListener('click', popup);
window.addEventListener('resize', boxedLocked);




function menu() {
    if (menuUl.style.display == 'block') {
        menuUl.style.display = 'none';

    } else {
        menuUl.style.display = 'block';
    }
}

function searchDisplay() {
    var searchBox = document.querySelector('.box-search');
    if (searchBox.classList.contains('display') == true) {
        searchBox.classList.remove('display');

    } else {
        searchBox.classList.add('display');
    }

}

onload = function height() {
    var box = document.querySelectorAll('.content-box li');
    var heightBox = 0;
    for (var i = 0; i < box.length; i++) {
        if (box[i].offsetHeight > heightBox) {
            heightBox = box[i].offsetHeight;
        }
        for (var i = 0; i < box.length; i++) {
            box[i].style.height = heightBox + "px";
        }
    }

}

function layoutSetting() {
    if (this.classList == 'wide') {
        nav.style.width = '100%';
        body.style.width = '100%';
    } else {
        nav.style.width = '90%';
        body.style.width = '90%';
    }
}

function bgChange() {
    var html = document.querySelector('html');
    var y = this.firstChild.src;
    if (body.style.width == '100%') {
        alert('Select Boxed Layout!');
    } else {
        html.style.backgroundImage = 'url(' + y + ')';
    }
}

function popup() {
    var modal = document.querySelector('.modal');
    var popupWindow = document.querySelector('.modal .popup');
    var close = document.querySelector('.modal .btn-close');
    close.addEventListener("click", function () {
        modal.style.display = 'none';
    }, false);
    modal.style.display = 'block';
}

function boxedLocked() {
    if (window.innerWidth < 1000) {
        nav.style.width = 100 + '%';
        body.style.width = 100 + '%';
    }

munuUl.style.display = window.innerWidth > 999 ? 'block' : 'none';

}
