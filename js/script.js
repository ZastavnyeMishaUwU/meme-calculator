function calculate() {
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;
    var animationDuration = 2000;
    document.querySelector('.loading-spinner').style.display = 'inline-block';

    setTimeout(function() {
        document.querySelector('.loading-spinner').style.display = 'none';
        document.querySelector('.slow-image').style.display = 'block';
        loadSlowImage();
    }, animationDuration);
}

function loadSlowImage() {
    var img = new Image();
    img.src = "https://www.meme-arsenal.com/memes/8b955bf4c55ba0ae6f324087fd02777b.jpg";
    img.onload = function() {
        var canvas = document.querySelector('.slow-image');
        var ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;

        var imgWidth = img.width;
        var imgHeight = img.height;
        var chunkHeight = 1;
        var chunks = Math.ceil(imgHeight / chunkHeight);
        var currentChunk = 0;

        function drawChunk() {
            if (currentChunk >= chunks) {
                return;
            }
            var y = currentChunk * chunkHeight;
            ctx.drawImage(img, 0, y, imgWidth, chunkHeight, 0, y, imgWidth, chunkHeight);
            currentChunk++;
            setTimeout(drawChunk, 5);
        }
        drawChunk();
    };
}
