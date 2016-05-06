var EventsFunction = (function() {
    'use strict';
 
    var $public = {};
    var $private = {};
 
    //Usado em pesquisar ou autocomplete, pois ele executa depois de um delay apos a ultima teclada
    $public.debounce = (function () {
        //Tempo em ms
        var timeWindow = 500,
            timeout;

        var implementation = function (options, callback) {
            callback();
        };

        return function(options, callback) {
            timeWindow = options.time || timeWindow;

            var context = this;
            var args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                implementation.apply(context, args);
            }, timeWindow);
        };
    }());

    //Usado geralmente em cliques, para evitar cliques duplos
    $public.throttle = (function () {

        var timeWindow = 500; // tempo em ms
        var lastExecution = new Date((new Date()).getTime() - timeWindow);

        var implementation = function (options, callback) {
            callback();
        };

        return function(options, callback) {
            timeWindow = options.time || timeWindow;
            
            if ((lastExecution.getTime() + timeWindow) <= (new Date()).getTime()) {
                lastExecution = new Date();
                return implementation.apply(this, arguments);
            }
        };
    }());
 
    return $public;
 
})();
