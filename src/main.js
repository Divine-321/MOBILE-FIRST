import './style.css'

const scroll = ScrollReveal ({
    reset: true,
    duration: 2600,
    distance: '60px'
})
scroll.reveal('.image-transform', {delay: 400, origin: 'top'})
scroll.reveal('.text-transform', {delay: 300, origin: 'left'}) 

const toggleButton = document.querySelector('.toggle-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('top-16');
});