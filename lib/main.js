(function() {
    'use strict';
    var gamegearSoftList = require('../data/soft_list');

    if (typeof define === 'function' && define.amd) {
        define(function() { return gamegearSoftList; });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = gamegearSoftList;
    } else {
        window.gameSoft = {
            GG: gamegearSoftList
        };
    }
})();