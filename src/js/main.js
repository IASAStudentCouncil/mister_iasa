const peaky = document.getElementById('peaky__blinders')
const man = document.getElementById('man')
const level = document.getElementById('lvl')
const mobile_nav = document.getElementById('menu_expand')
const top_nav = document.getElementById('top_nav')
const leza = document.querySelector('.leza')
const header = document.querySelector('header')
const peaky_mob = document.getElementById('peaky_mob')
const slider = document.getElementById('slider')

document.addEventListener('DOMContentLoaded', function () {
    // Menu navigate animation
    document.querySelectorAll('.nav-item>.nav-link').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault()
            var id = link.getAttribute('href')
            document.querySelector(id).scrollIntoView({ block: 'start', behavior: 'smooth' })
        }, false)
    })
    let swiper = new Swiper('.swiper-container', {
              slidesPerView: 1,
              spaceBetween: 30,
              loop: true,
              centeredSlides: true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },

        })
    
    header.style.height = screen.height + 'px' // kaef dlya mobilok
    
    if(document.body.clientWidth > 974) {
        setInterval(() => {
            parallax_desktop(pageYOffset)
        }, 10)
    } else {
        //mobile
    }
    mobile_nav.addEventListener('click', menu)

 })

function parallax_desktop(offset) {
    peaky.style.top = 100 + offset/2 + 'px'
    man.style.top = 90 - offset/5 + 'px'
}

function parallax_mobile() {    
    requestAnimationFrame(() => {
        level.style.top = pageYOffset * 0.6 + 'px'
        peaky_mob.style.top = pageYOffset / 2 + 'px'       
    })
}

function menu() {
    if(!top_nav.className) {
        top_nav.className = 'responsive'
        leza.style.top = -296.8 + 'px' // maybe container.clientHeight
    } else {
        top_nav.className = ''
        leza.style.top = -52.8 + 'px' // maybe container.clientHeight
    }
}
