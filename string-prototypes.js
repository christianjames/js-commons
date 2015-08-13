String.prototype.toTileCase = function () {
    return this.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

String.prototype.isEmail = function () {
    var email=this;
    var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
    var check=/@[\w\-]+\./;
    var checkend=/\.[a-zA-Z]{2,3}$/;
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
    else {return true;}
}

String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g,"");
}

String.prototype.ucwords = function () {
    //   example 1: ucwords('kevin van  zonneveld');
    //   returns 1: 'Kevin Van  Zonneveld'
    //   example 2: ucwords('HELLO WORLD');
    //   returns 2: 'HELLO WORLD'

    var str = this;
    return this.replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function($1) {
                return $1.toUpperCase();
            });

}
