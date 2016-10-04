Image.prototype.getColorsImageCanvas = function (options) {
    
    var canvas = document.createElement('canvas');
    var ctxCanvas = canvas.getContext('2d');

    canvas.width = options.width;
    canvas.height = options.height;

    ctxCanvas.drawImage(this, 0 , 0, options.width, options.height);

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
        a = arredonda(map[i+3]);
        
        // a = 1;

        if (a == 0) {
            // console.log(i, map[i+3]);
        }
        else {
            var rgb = String(r+','+g+','+b);
            //alpha = map[i+2]; //ignora canal alpha

            hex = rgbToHex(r, g, b);
            var x = (i / 4) % canvas.width;
            var y = Math.floor((i / 4) / canvas.width);

            //adiciona no histograma ou incrementa se já existir
            if (histograma[hex] === undefined) {
                // console.log('%c teste', 'color: '+hex, x, y, canvas.width, canvas.height);

                histograma[hex] = {count: 1, x: x, y: y};
            } else {
                histograma[hex] = {count: histograma[hex].count+1, x: x, y: y};
            }
        }
    }

    var coresMaisComum = [];

    //recupera cor mais comum
    for (var cor in histograma) {
        coresMaisComum.push({hexa: cor, x: histograma[cor].x, y: histograma[cor].y, count: histograma[cor].count});
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
