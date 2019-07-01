//Формирование пути к галерее
var galleryUrl = window.location.href.split('4.%20Port%20harbor')[0]
    + '2.%20Gallery/index.html';

//Константы - css классы для главной картики 
const mainImageDefaultClass = 'content-image-container';
const mainImageActiveClass = 'content-image-container-active';

const curentItemClass = "slider-item-current";
const prevItemClass = "slider-item-prev";
const itemClass = "slider-item";

//Индекс слайда по умолчанию
var slideIndex = 1;
var prevSlide = 0;
var sliderAnimationType = 1;


//Получаем блок с картинками 
var main_img = document.getElementById('main_img');
//Стрелка в лево
var leftArrow = document.getElementsByClassName('slider-prev')[0];
//Стрелка в право
var rightArrow = document.getElementsByClassName('slider-next')[0];

//Обработчик события нажатия на картинку
main_img.onclick = function () { mainImageClassReboot(); }

leftArrow.onclick = function (event) {
    minusSlide();
    event.stopPropagation();
}

rightArrow.onclick = function (event) {
    plusSlide();
    event.stopPropagation();
}

document.addEventListener("DOMContentLoaded", validateSliderAnimationType);


function init() {
    //Получение из session storege адрес на картинку из галереи
    var imgSrc = sessionStorage.getItem('imgSrc');

    //Устанавливаем картинку из галереи
    if (imgSrc != null) {
        main_img.getElementsByTagName('img')[0].src = imgSrc;
    }

    //Устанавливаем ссылку на галерею
    var pencils = document.getElementsByClassName('pencil');
    for (let index = 0; index < pencils.length; index++) {
        pencils[index].getElementsByTagName('a')[0].href = galleryUrl;
    }
    let items = main_img.getElementsByTagName('li');

    //Задание классов для слайдера
    for (let index = 0; index < items.length; index++) {
        if(index == 0){
            items[index].classList.add(curentItemClass + sliderAnimationType);
        }
        items[index].classList.add(itemClass + sliderAnimationType);
    }
}

function mainImageClassReboot() {
    for (let index = 0; index < main_img.classList.length; index++) {
        if (main_img.classList[index] === mainImageDefaultClass) {
            main_img.classList.remove(mainImageDefaultClass);
            main_img.classList.add(mainImageActiveClass);
            return;
        }

        if (main_img.classList[index] === mainImageActiveClass) {
            main_img.classList.remove(mainImageActiveClass);
            main_img.classList.add(mainImageDefaultClass);
            return;
        }
    }
}

// Основная функция слайдера 
function showSlides(n) {
    let slides = document.getElementsByClassName(itemClass + sliderAnimationType);

    if (prevSlide > 0) {
        slides[prevSlide - 1].classList.remove(prevItemClass + sliderAnimationType);
    }
    slides[slideIndex - 1].classList.remove(curentItemClass + sliderAnimationType);

    prevSlide = slideIndex;

    if (n > slides.length) {
        slideIndex = 1;
    }
    else if (n < 1) {
        slideIndex = slides.length;
    }
    else {
        slideIndex = n;
    }
    slides[prevSlide - 1].classList.add(prevItemClass + sliderAnimationType);
    slides[slideIndex - 1].classList.add(curentItemClass + sliderAnimationType);
}

// Функция уменьшяет индекс на 1, показывает предыдущий слайд
function minusSlide() {
    let n = slideIndex - 1;
    showSlides(n);
}

// Функция увеличивает индекс на 1, показывает следующй слайд
function plusSlide() {
    let n = slideIndex + 1;
    showSlides(n);
}

// Устанавливает текущий слайд 

function validateSliderAnimationType() {
    // let animationType = prompt('Выберите анимацию слайдера:\n' +
    //     '1 - исчезает/появляется;\n' +
    //     '2 - вверх/вниз;\n' +
    //     '3 - лево/право.', 1);
    // if (animationType >= 1 && animationType <= 3) {
    //     sliderAnimationType = animationType;
    // }
    init();
}


