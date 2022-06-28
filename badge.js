window.onload = function(){
    var favicon = document.getElementById('favicon');
    var faviconSize = 16;

    var canvas = document.createElement('canvas');

    var context = canvas.getContext('2d');
    var img = document.createElement('img');
    img.src = favicon.href;

    img.onload = () => {

        canvas.width = faviconSize;
        canvas.height = faviconSize;

        // Draw background
        context.fillStyle = "#F76B67";
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Draw text
        context.font = "10px 'helvetica', Assistant";
        context.fillStyle = "#FFFFFF";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(3, canvas.width - faviconSize / 3, faviconSize / 3 );
        favicon.href=canvas.toDataURL("image/png");
    };
}