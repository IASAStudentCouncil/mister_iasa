const peaky=document.getElementById("peaky__blinders"),man=document.getElementById("man"),level=document.getElementById("lvl"),mobile_nav=document.getElementById("menu_expand"),top_nav=document.getElementById("top_nav"),leza=document.querySelector(".leza"),header=document.querySelector("header"),peaky_mob=document.getElementById("peaky_mob"),slider=document.getElementById("slider");function parallax_desktop(e){peaky.style.top=100+e/2+"px",man.style.top=90-e/5+"px"}function parallax_mobile(){requestAnimationFrame(()=>{level.style.top=.6*pageYOffset+"px",peaky_mob.style.top=pageYOffset/2+"px"})}function menu(){top_nav.className?(top_nav.className="",leza.style.top="-52.8px"):(top_nav.className="responsive",leza.style.top="-296.8px")}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();var n=e.getAttribute("href");document.querySelector(n).scrollIntoView({block:"start",behavior:"smooth"})},!1)});new Swiper(".swiper-container",{slidesPerView:1,spaceBetween:30,loop:!0,centeredSlides:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});header.style.height=screen.height+"px",document.body.clientWidth>974&&setInterval(()=>{parallax_desktop(pageYOffset)},10),mobile_nav.addEventListener("click",menu)});
//# sourceMappingURL=main-min.js.map
