Image.prototype.getColorsImageCanvas = function () {
    var ctxCanvas = canvas.getContext('2d');
    //monta histograma
    var hex, r,g,b; //,alpha;
    var histograma = {};
    var map = ctxCanvas.getImageData(0, 0, canvas.width, canvas.height).data;

    //valor em hexadecimal
    function arredonda(v) {
        return 5 * (Math.round(v / 5));
    }

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    for (var i = 0, len = map.length; i < len; i += 4) {

        //recupera componentes de um ponto
        r = arredonda(map[i]);
        g = arredonda(map[i+1]);
        b = arredonda(map[i+2]);
        //alpha = map[i+2]; //ignora canal alpha

        hex = rgbToHex(r, g, b);

        //adiciona no histograma ou incrementa se já existir
        if (histograma[hex] === undefined) {
            histograma[hex] = 1;
        } else {
            histograma[hex]++;
        }
    }

    var coresMaisComum = [];

    //recupera cor mais comum
    for (var cor in histograma) {
        coresMaisComum.push({hexa: cor, count: histograma[cor]});
    }

    coresMaisComum = coresMaisComum.sort(function(a,b) {
        if ( a.count > b.count ){
            return -1;
        }
        if ( a.count < b.count ){
            return 1;
        }
        return 0;
    });

    return coresMaisComum;
};
