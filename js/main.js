var isLight = true;

function switchTheme() {
    console.log('Switching theme');
    console.log(isLight);

    if (isLight) {
        goDark();
    } else {
        goLight();
    }

    isLight = !isLight;
}

function loadCSS(filename) {
    var fileref = document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", filename)

    document.getElementsByTagName("head")[0].appendChild(fileref)
}

function goDark() {
    loadCSS("css/dark.css")
    /*
    if (!document.getElementById('css')) {
        document.write('<link rel="stylesheet" type="text/css" href="css/dark.css">');
    }*/
}

function goLight() {
    loadCSS("css/light.css")
    /*
    if (!document.getElementById('css')) {
        document.write('<link rel="stylesheet" type="text/css" href="css/light.css">');
    }*/
}

document.getElementById('circle').addEventListener('click', switchTheme);
