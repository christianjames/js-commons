CustomFunctions = {
    getBase64Image: function (imgElem) {
        // imgElem must be on the same server otherwise a cross-origin error will be thrown "SECURITY_ERR: DOM Exception 18"
        var canvas = document.createElement("canvas");
        canvas.width = imgElem.width;
        canvas.height = imgElem.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(imgElem, 0, 0, imgElem.width, imgElem.height);
        var dataURL = canvas.toDataURL("image/png");

        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    },
    getYoutubeID: function (url) {
    
        var rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

        r = url.match(rx);
        return r[1];
    },
    getdaysInMonth: function (month,year) { 
        return new Date(year, month, 0).getDate(); 
    },
    getExtensionFile: function (Caminho){
        Caminho     = Caminho.replace('/\/g', "/");
        var Arquivo = Caminho.substring(Caminho.lastIndexOf('/') + 1);
        var Extensao= Arquivo.substring(Arquivo.lastIndexOf('.') + 1);
        return {arquivo:Arquivo, extensao:Extensao};
    },
    getDimensionsKeepRatio: function (lastWidth, lastHeight, newWidth, newHeight) {
            var ratioW = lastWidth / newWidth;
            var ratioH = lastHeight / newHeight;
            
            var ratio;
            if ((ratioW <= 1 && ratioH <= 1) || (ratioW >= 1 && ratioH >= 1))
            {
                ratio = 1 / ((ratioW > ratioH) ? ratioW : ratioH);
            }
            else if (ratioW > 1 && ratioH <= 1)
            {
                ratio = 1 / ratioW;
            }
            else if (ratioW <= 1 && ratioH > 1)
            {
                ratio = 1 / ratioH;
            }

            if (ratio) {
                lastWidth *= ratio;
                lastHeight *= ratio;
            }

            return {
                width : lastWidth,
                height : lastHeight
            };
    },
    trimCanvas: function (c) {
            var ctx = c.getContext('2d'),
                copy = document.createElement('canvas').getContext('2d'),
                pixels = ctx.getImageData(0, 0, c.width, c.height),
                l = pixels.data.length,
                i,
                bound = {
                    top: null,
                    left: null,
                    right: null,
                    bottom: null
                },
                x, y;

            for (i = 0; i < l; i += 4) {
                if (pixels.data[i+3] !== 0) {
                    x = (i / 4) % c.width;
                    y = ~~((i / 4) / c.width);
                    
                    if (bound.top === null) {
                        bound.top = y;
                    }

                    if (bound.left === null) {
                        bound.left = x;
                    } else if (x < bound.left) {
                        bound.left = x;
                    }

                    if (bound.right === null) {
                        bound.right = x;
                    } else if (bound.right < x) {
                        bound.right = x;
                    }

                    if (bound.bottom === null) {
                        bound.bottom = y;
                    } else if (bound.bottom < y) {
                        bound.bottom = y;
                    }
                }
            }

            var trimHeight = bound.bottom - bound.top,
                trimWidth = bound.right - bound.left,
                trimmed = ctx.getImageData(bound.left, bound.top, trimWidth, trimHeight);

            copy.canvas.width = trimWidth;
            copy.canvas.height = trimHeight;
            copy.putImageData(trimmed, 0, 0);

            // open new window with trimmed image:
            return copy.canvas;
        }
}
