
function someFun() {
    var res = [];
    for (let i = 0; i < 10; i++) {
        (function (i) {
            res[i] = function () {
                console.log(i);
            }
        })(i);
    }
    return res;
}

var resSomeFunc = someFun();
resSomeFunc.forEach(function (item, i, arr) {
    item();
    console.log(`i: ${i}`);
});