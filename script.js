let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

function scrollEventos(direcao) {
  const container = document.getElementById("eventosContainer");
  const larguraBox = container.querySelector(".eventos-box").offsetWidth + 20; // box + gap
  container.scrollBy({
    left: direcao * larguraBox,
    behavior: "smooth"
  });
}



let currentIndex = 0;
const track = document.getElementById("eventosTrack");
const boxWidth = 300 + 20; // largura + gap
const visibleBoxes = 3;


function scrollEventos(direction) {
  const totalBoxes = track.children.length;
  const maxIndex = totalBoxes - visibleBoxes;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  const offset = currentIndex * boxWidth;
  track.style.transform = `translateX(-${offset}px)`;
}




window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    ScrollReveal({
         reset: true,
         distance: '80px',
         duration: 2000,
         delay: 200
        });

        ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});



