function rain() {
    var image = document.getElementById('background');
    image.onload = function () {
        var engine = new RainyDay({
            image: this
        });
        engine.rain([
            [6, 2, 2]
        ], 50);
    };
    