"use strict";
require("v8-compile-cache");

const dict = {
 "o": "0", "O": "0", "a": "4", "A": "4",
 "e": "3", "E": "3", "i": "1", "I": "1"
};

module.exports =  function(val) {
        for (let k of Object.keys(dict)){
            val = val.replace(new RegExp(k, "g"), dict[k]);
        }
     return val;
    }
