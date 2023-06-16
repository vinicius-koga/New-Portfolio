const homePage = document.querySelector('#home');
const homeSubtitle = document.querySelector('#home .title-md');
const homeTitle = document.querySelector('#home .home-title');
const homeSubtext = document.querySelector('#home .home-subtext');
const homeButton = document.querySelector('#home .home-btn');
const iconBarOne = document.querySelector('#home .icon-bar.one');
const iconBarTwo = document.querySelector('#home .icon-bar.two');
const iconBarThree = document.querySelector('#home .icon-bar.three');
const iconBarFour = document.querySelector('#home .icon-bar.four');

// 0 = fadeUp // 1 = fadeIn // 2 = fadeDown
function fade(element, numb) {
    if(numb === 0) {
        element.classList.add('fadeUp');
        element.classList.remove('opacity-0');
        element.classList.remove('opacity-0-noAnimation');
    }
    if(numb === 1) {
        element.classList.add('fadeIn');
        element.classList.remove('opacity-0');
        element.classList.remove('opacity-0-noAnimation');
    }
    if(numb === 2) {
        element.classList.add('fadeDown');
        element.classList.remove('opacity-0');
        element.classList.remove('opacity-0-noAnimation');
    }
}

function removeFade(element, numb) {
    if(numb === 0) {
        element.classList.remove('fadeUp');
        element.classList.add('opacity-0');
    }
    if(numb === 1) {
        element.classList.remove('fadeLeft');
        element.classList.add('opacity-0');
    }
    if(numb === 2) {
        element.classList.remove('fadeDown');
        element.classList.add('opacity-0');
    }
}

function iconBarAppear() {
    iconBarOne.classList.add('iconBarOne');
    iconBarTwo.classList.add('iconBarTwo');
    iconBarThree.classList.add('iconBarThree');
    iconBarFour.classList.add('iconBarFour');
    iconBarOne.classList.remove('opacity-0');
    iconBarTwo.classList.remove('opacity-0');
    iconBarThree.classList.remove('opacity-0');
    iconBarFour.classList.remove('opacity-0');
}

function iconBarDisappear() {
    iconBarOne.classList.remove('iconBarOne');
    iconBarTwo.classList.remove('iconBarTwo');
    iconBarThree.classList.remove('iconBarThree');
    iconBarFour.classList.remove('iconBarFour');
    iconBarOne.classList.add('opacity-0');
    iconBarTwo.classList.add('opacity-0');
    iconBarThree.classList.add('opacity-0');
    iconBarFour.classList.add('opacity-0');
}

function typeTextAnimation(el) {
    const text = '<!-- SOU DESENVOLVEDOR WEB - FRONT-END -->'
    const textArr = text.split('');
    textArr.forEach((letter, index) => {
        setTimeout(() => {
            el.innerHTML += letter;
        }, 60 * index);
    })
}
const insertText = document.querySelector('.typeTextAnimation');

const homeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fade(homeSubtitle, 0)
            setTimeout(() => { fade(homeTitle, 0); }, 500);
            setTimeout(() => { fade(homeButton, 2); }, 500);
            insertText.innerHTML = '&nbsp;';
            setTimeout(() => { typeTextAnimation(insertText); }, 1200);

            iconBarAppear();
        }
        if (!entry.isIntersecting) {
            removeFade(homeSubtitle, 0);
            removeFade(homeTitle, 0);
            removeFade(homeButton, 2);
            insertText.innerHTML = '&nbsp;';

            iconBarDisappear();
        }
    })
})
homeObserver.observe(document.querySelector('.home-footer'));