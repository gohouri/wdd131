// JavaScript for hamburger menu and footer dynamic content
const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');

hamburger.addEventListener('click', () => {
    navigation.querySelector('ul').classList.toggle('visible');
});

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
