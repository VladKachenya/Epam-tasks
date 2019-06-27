var galleryUrl = window.location.href.split('4.%20Port%20harbor')[0]
    + '2.%20Gallery/index.html';

var mainImageDefaultClass = 'content-image-container';
var mainImageActiveClass = 'content-image-container-active';

var imgSrc = sessionStorage.getItem('imgSrc');
var main_img = document.getElementById('main_img');

if (imgSrc != null) {
    main_img.getElementsByTagName('img')[0].src = imgSrc;
}

var pencils = document.getElementsByClassName('pencil');
for (let index = 0; index < pencils.length; index++) {
    pencils[index].getElementsByTagName('a')[0].href = galleryUrl;
}

main_img.onclick = function (){
    for (let index = 0; index < main_img.classList.length; index++) {
        if(main_img.classList[index] === mainImageDefaultClass){
            main_img.classList.remove(mainImageDefaultClass);
            main_img.classList.add(mainImageActiveClass);
            return;
        }

        if(main_img.classList[index] === mainImageActiveClass){
            main_img.classList.remove(mainImageActiveClass);
            main_img.classList.add(mainImageDefaultClass);
            return;
        }
    }
};
