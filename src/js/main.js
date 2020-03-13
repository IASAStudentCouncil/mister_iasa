const peaky = document.getElementById('peaky__blinders')
const man = document.getElementById('man')
const level = document.getElementById('lvl')
const mobile_nav = document.getElementById('menu_expand')
const top_nav = document.getElementById('top_nav')
const leza = document.querySelector('.leza')
const header = document.querySelector('header')

document.addEventListener('DOMContentLoaded', function () {
    // Menu navigate animation
    document.querySelectorAll('.nav-item>.nav-link').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault()
            var id = link.getAttribute('href')
            document.querySelector(id).scrollIntoView({ block: 'start', behavior: 'smooth' })
        }, false)
    })
        
    header.style.height = screen.height + 'px' // kaef dlya mobilok

    if(document.body.clientWidth > 974) {
    window.addEventListener('scroll', () => {
            parallax_desktop(pageYOffset)
        })
    } else {
    window.addEventListener('scroll', () => {
            parallax_mobile(pageYOffset)
        })
    }
    mobile_nav.addEventListener('click', menu)
 })

function parallax_desktop(offset) {
    peaky.style.top = 100 + offset/2 + 'px'
    man.style.top = 90 - offset/5 + 'px'
}

function parallax_mobile(offset) {
    level.style.top = offset * 0.6 + 'px'
}

function menu() {
    if(!top_nav.className) {
        top_nav.className = 'responsive'
        leza.style.top = -219.2 + 'px' // maybe container.clientHeight
    } else {
        top_nav.className = ''
        leza.style.top = -60.8 + 'px' // maybe container.clientHeight
    }
}
