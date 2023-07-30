document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
        `
    })
})

const btnStart = document.querySelector(".button-start");
const raining = document.querySelector(".rain");

btnStart.onclick = function () {
    raining.classList.remove('none')
}

