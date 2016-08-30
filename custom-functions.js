CustomFunctions = {
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
    }
}
