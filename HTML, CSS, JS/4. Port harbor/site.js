//Формирование пути к галерее
var galleryUrl = window.location.href.split('4.%20Port%20harbor')[0]
    + '2.%20Gallery/index.html';

//Константы - css классы для главной картики 
const mainImageDefaultClass = 'content-image-container';
const mainImageActiveClass = 'content-image-container-active';

//Получаем блок с картинками 
var main_img = document.getElementById('main_img');

//Обработчик события нажатия на картинку
main_img.onclick = function(){ mainImageClassReboot();}

//Индекс слайда по умолчанию
var slideIndex = 1;

init();
//showSlides(slideIndex);

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
    let i;
    let slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}

// Функция уменьшяет индекс на 1, показывает предыдущий слайд
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

// Устанавливает текущий слайд 
function currentSlide(n) {
    showSlides(slideIndex = n);
}


