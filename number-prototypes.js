CustomNumber = {
    randomMinMax: function (min, max) {
        if(min && max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return false;
    }
}
