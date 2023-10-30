const toggleButton = document.querySelector('.toggle');
const navList = document.querySelector('#navbar ul');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay); // Ajout de l'overlay au body

toggleButton.addEventListener('click', function() {
    if (navList.style.display === 'none' || navList.style.display === '') {
        navList.style.display = 'block';
        overlay.style.display = 'block'; // Afficher l'overlay
    } else {
        navList.style.display = 'none';
        overlay.style.display = 'none'; // Cacher l'overlay
    }
    this.classList.toggle('cross');
    this.classList.toggle('vertical-bars');
});

// Fermez le menu lorsque vous cliquez sur l'overlay
overlay.addEventListener('click', function() {
    navList.style.display = 'none';
    overlay.style.display = 'none';
    toggleButton.classList.remove('cross');
    toggleButton.classList.add('vertical-bars');
});

