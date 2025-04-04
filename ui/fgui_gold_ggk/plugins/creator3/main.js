"use strict";
//FYI: https://github.com/Tencent/puerts/blob/master/doc/unity/manual.md
Object.defineProperty(exports, "__esModule", { value: true });
exports.onDestroy = exports.onPublish = void 0;
const GenCode_TS_1 = require("./GenCode_TS");
function onPublish(handler) {
    if (!handler.genCode)
        return;
    handler.genCode = false; //prevent default output
    console.log('Handling gen code in plugin Creator3');
    (0, GenCode_TS_1.genCode)(handler); //do it myself
}
exports.onPublish = onPublish;
function onDestroy() {
    //do cleanup here
}
exports.onDestroy = onDestroy;
