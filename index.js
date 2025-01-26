document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const dropdown = document.querySelector('.menu .dropdown');
    const overlay = document.querySelector('.overlay');
    const menuIcon = document.querySelector('.menu p');

    menu.addEventListener('click', () => {
        dropdown.classList.toggle('show'); // Toggle the 'show' class for smooth transitions
        menuIcon.classList.toggle('transform'); // Toggle the transform class to animate the icon
        overlay.classList.toggle('show'); // Toggle the 'show' class for smooth transitions
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target)) {
            dropdown.classList.remove('show'); // Remove 'show' class when clicking outside
            menuIcon.classList.remove('transform'); // Reset the icon when clicking outside
            overlay.classList.remove('show'); // Remove 'show' class when clicking outside
        }
    });
});