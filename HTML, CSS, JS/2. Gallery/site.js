var portUrl = window.location.href.split('2.%20Gallery')[0]
    + '4.%20Port%20harbor/index.html';

var items = document.getElementsByClassName('wrap-item');
for (let index = 0; index < items.length; index++) {
    items[index].onclick = function (e) {
        let target = e ? e.currentTarget : window.event.srcElement;
        let imgSrc = target.getElementsByTagName('img')[0].src;
        sessionStorage.setItem('imgSrc', imgSrc);

        document.location.href = portUrl;
    };
}
