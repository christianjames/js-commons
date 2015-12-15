CustomFunctions = {
    getdaysInMonth: function (month,year) { 
        return new Date(year, month, 0).getDate(); 
    },
    getExtensionFile: function (Caminho){
        Caminho     = Caminho.replace('/\/g', "/");
        var Arquivo = Caminho.substring(Caminho.lastIndexOf('/') + 1);
        var Extensao= Arquivo.substring(Arquivo.lastIndexOf('.') + 1);
        return {arquivo:Arquivo, extensao:Extensao};
    }
}
