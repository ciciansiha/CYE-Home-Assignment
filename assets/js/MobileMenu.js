document.addEventListener('DOMContentLoaded', () => {

    const toggleMenu = () => {
        const menu = document.querySelector('.menu-mobile-section');
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex'; // Show menu
        }
        else {
            menu.style.display = 'none'; // Hide menu
        }
    };

    document.querySelector('.menu-mobile').addEventListener('click', toggleMenu);
    document.querySelector('.menu-mobile-section .close-icon').addEventListener('click', toggleMenu);

});