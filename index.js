window.onload = function () {

    var faviconIndex = 0;
    var favicon = document.getElementById('favicon');

    setInterval(function() {
        favicon.href = "favicons/"+faviconIndex + ".png";
        faviconIndex++;
        faviconIndex %= 3;
    }, 1000);
};