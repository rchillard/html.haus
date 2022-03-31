// From: https://codepen.io/smashingmag/pen/abEOQyQ

function downloadCode(link, code) {
    link.href = 'data:text/html;charset=utf-8,' + code;
}

document.getElementById('download-template').addEventListener('click', function () {
    downloadCode(this, html.value);
}, false);