var filename = "main.js";

function toMode(fn){
    var filen = fn;
    var ext = filen.split('.');
    var mode = "";

    // console.log(ext);
    // console.log(ext.length);

    var extname = ext[ext.length - 1];

    // console.log(extname);

    if(extname == "js"){
        mode = "javascript";
    };

    // console.log(mode)

    return mode;
}

var modeX = toMode(filename);
var value = "console.log('hi');";
var editor = CodeMirror(document.body, {
    value: value,
    lineNumbers: true,
    mode: modeX,
    keyMap: "sublime",
    autoCloseBrackets: true,
    matchBrackets: true,
    showCursorWhenSelecting: true,
    theme: "monokai",
    tabSize: 4
});