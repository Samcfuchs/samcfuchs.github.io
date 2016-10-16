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

function goDark() {
}

function goLight() {
}

document.getElementById('circle').addEventListener('click', switchTheme);
