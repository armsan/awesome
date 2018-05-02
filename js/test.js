
function jsonTest() {
    var requestUrl = "http://localhost:80/index.html";
    var request = new XMLHttpRequest();
    request.open('GET', requestUrl);
    request.responseType = 'text';
    request.send();

    request.onload = function () {
        var superHeroesText = request.response;
        console.log(superHeroesText);
        document.getElementById('test').innerText = superHeroesText;
    }
}