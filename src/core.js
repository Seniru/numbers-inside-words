"use strict";
require("v8-compile-cache");
module.exports = {
create:function(value){
var i;
var rslSize1 = value.replace(/[^a]/g, "").length;
var rslSize2 = value.replace(/[^A]/g, "").length;
var rslSize3 = value.replace(/[^o]/g, "").length;
var rslSize4 = value.replace(/[^O]/g, "").length;
var rslSize5 = value.replace(/[^e]/g, "").length;
var rslSize6 = value.replace(/[^E]/g, "").length;
var rslSize7 = value.replace(/[^i]/g, "").length;
var rslSize8 = value.replace(/[^I]/g, "").length;

for (i = 0; i < rslSize3; i++){value = value.replace("o", "0");};
for (i = 0; i < rslSize4; i++){value = value.replace("O", "0");};
for (i = 0; i < rslSize2; i++){value = value.replace("A", "4");};
for (i = 0; i < rslSize1; i++){value = value.replace("a", "4");};
for (i = 0; i < rslSize5; i++){value = value.replace("e", "3");};
for (i = 0; i < rslSize6; i++){value = value.replace("E", "3");};
for (i = 0; i < rslSize6; i++){value = value.replace("E", "3");};
for (i = 0; i < rslSize7; i++){value = value.replace("i", "1");};
for (i = 0; i < rslSize8; i++){value = value.replace("I", "1");};
return value.toString()
    }
};
