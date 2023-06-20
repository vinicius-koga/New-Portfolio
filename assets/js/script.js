const cBoxLg = document.querySelector('.circles-box.bottomright.lg');

function resizeCBox() {
    const cBoxLgWidth = cBoxLg.offsetWidth;
    if(window.innerWidth < 993) {
        cBoxLg.style.height = `${cBoxLgWidth}px`;
        cBoxLg.style.bottom = `-${cBoxLgWidth - 150}px`;
    }
    if(window.innerWidth > 992) {
        cBoxLg.style.height = null
        cBoxLg.style.bottom = null
    }
}

window.addEventListener('resize', function(event) {
    resizeCBox();
}, true);

resizeCBox();