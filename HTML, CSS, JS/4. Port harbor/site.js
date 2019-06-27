var galleryUrl = window.location.href.split('4.%20Port%20harbor')[0]
    + '/2.%20Gallery/index.html';

var imgSrc = sessionStorage.getItem('imgSrc');
if (imgSrc != null) {
    document.getElementById('main_img').
        getElementsByTagName('img')[0].src = imgSrc;
}

var pencils = document.getElementsByClassName('pencil');
for (let index = 0; index < pencils.length; index++) {
    pencils[index].getElementsByTagName('a')[0].href = galleryUrl;
}
