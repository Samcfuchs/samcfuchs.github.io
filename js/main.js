var isLight = true;

function switchTheme() {
    if (isLight) {
        goDark();
    } else {
        goLight();
    }

    isLight = !isLight;
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
}

function goLight() {
    var head = document.getElementsByTagName("head")[0];
    var css = document.getElementsByClassName('auto')[0];
    head.removeChild(css);
    loadCSS("css/light.css")
}

document.getElementById('circle').addEventListener('click', switchTheme);
