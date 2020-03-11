document.addEventListener('DOMContentLoaded', function () {

    // Menu navigate animation
    document.querySelectorAll('.nav-item>.nav-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var id = link.getAttribute('href');
            document.querySelector(id).scrollIntoView({ block: 'start', behavior: 'smooth' });
        }, false);
    });
});

let peaky = document.getElementById('peaky__blinders')
let man = document.getElementById('man')


window.addEventListener('scroll', () => {
    parallax(pageYOffset)
})

function parallax(top) {
    peaky.style.top = 166 + top/2 + 'px'
    man.style.top = 166 - top/5 + 'px' 
}





