var openFile = function(){
    var reader = new FileReader();
    reader.onload = function(event) {
        var contents = event.target.result;
        console.log("File contents: " + contents);
    };

    reader.onerror = function(event) {
        console.error("File could not be read! Code " + event.target.error.code);
    };

    console.log(reader.readAsText);

    return reader;
};

$(document).ready(function(){
    files = false;
    $(".nofile").show();
});

window.onload = function(){
    loadFile("index.html", "./");
};

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
    } else if(extname == "html" || extname == "htm"){
        mode = "htmlmixed";
    } else if(extname == "css"){
        mode = "css";
    } else if(extname == "scss"){
        mode = "text/x-scss";
    } else if(extname == "txt"){
        mode = "plain";
    } else if(extname == "py"){
        mode = "python";
    } else if(extname == "php"){
        mode = "php";
    } else if(extname == "sas"){
        mode = "sas";
    } else if(extname == "sass"){
        mode = "sass";
    } else {
        mode = "plain";
    }

    console.log(mode);

    return mode;
}

theme = "monokai";

function loadFile(filename, dir){
    $(".fn").val(filename);
    $(".nofile").hide();
    files = true;
    var modeX = toMode(filename);
    var value = "<content></content>";
    var editor = CodeMirror(document.body, {
        showHint: true,
        value: value,
        lineNumbers: true,
        mode: modeX,
        keyMap: "sublime",
        autoCloseBrackets: true,
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: theme,
        tabSize: 4,
        smartIndent: true
    });
}