function start() {
    applyTheme();
    addListener();
}

function switchTheme() {
    if (isLight()) {
        goDark();
    } else {
        goLight();
    }
}

function applyTheme() {
    if (isLight()) {
        goLight();
    } else {
        goDark();
    }
}

function isLight() {
    var is = localStorage.getItem('theme') == "light";

    if (is == null) {
        localStorage.setItem('theme', "light");
    }

    return localStorage.getItem('theme') == "light";
}

function loadCSS(filename) {
    var fileref = document.createElement("link")
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
    fileref.setAttribute("class", "auto");

    document.getElementsByTagName("head")[0].appendChild(fileref);
}

function goDark() {
    var head = document.getElementsByTagName("head")[0];
    var css = document.getElementsByClassName('auto')[0];
    head.removeChild(css);
    loadCSS("css/dark.css")

    localStorage.setItem('theme', "dark");
}

function goLight() {
    var head = document.getElementsByTagName("head")[0];
    var css = document.getElementsByClassName('auto')[0];
    head.removeChild(css);
    loadCSS("css/light.css")

    localStorage.setItem('theme', "light");
}

function addListener() {
    document.getElementById('circle').addEventListener('click', switchTheme);
}
