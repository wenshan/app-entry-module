'use strict';
var Utils = {
    merge: function () {
        const ret = {};
        const args = [].slice.call(arguments, 0);
        args.forEach((a) => {
            Object.keys(a).forEach((k) => {
                ret[k] = a[k];
            });
        });
        return ret;
    },
    cookie_get: function(key){
	    var REGEX_KEY = new RegExp(key + '=([^;]+)', 'i');
	    return  document.cookie.match(REGEX_KEY)[1];
    }
};


module.exports = Utils;
