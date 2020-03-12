let peaky = document.getElementById('peaky__blinders')
let man = document.getElementById('man')
const levels = Array.from(document.querySelectorAll('.lvl'))


document.addEventListener('DOMContentLoaded', function () {

    // Menu navigate animation
    document.querySelectorAll('.nav-item>.nav-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault()
            var id = link.getAttribute('href')
            document.querySelector(id).scrollIntoView({ block: 'start', behavior: 'smooth' })
        }, false)
    })
 })

if(document.body.clientWidth > 974) {
    window.addEventListener('scroll', () => {
        parallax_desktop(pageYOffset)
    })
} else {
    window.addEventListener('scroll', () => {
        parallax_mobile(pageYOffset)
    })
}

function parallax_desktop(top) {
    peaky.style.top = 100 + top/2 + 'px'
    man.style.top = 90 - top/5 + 'px'
}

function parallax_mobile(top) {
    levels.forEach((lvl, i) => {
        lvl.style.top =  top * (0.6 + i * 0.02) + 'px'
    })
}


