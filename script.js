document.addEventListener('DOMContentLoaded', function() {
    // Відкрити/закрити меню
    const menuButton = document.getElementById('menuButton');
    const closeButton = document.getElementById('closeButton');
    const sideMenu = document.getElementById('sideMenu');
    let isMenuOpen = false;

    menuButton.onclick = function() {
        sideMenu.style.width = isMenuOpen ? "0" : "250px";
        isMenuOpen = !isMenuOpen;
    };

    closeButton.onclick = function() {
        sideMenu.style.width = "0";
        isMenuOpen = false;
    };

    // Функція для переключення підменю
    function toggleSubmenu(linkId) {
        const link = document.getElementById(linkId);
        const submenu = link.nextElementSibling;
        let isSubmenuOpen = false; // Додали перемінну для збереження стану підменю

        link.onclick = function(e) {
            e.preventDefault();
            isSubmenuOpen = !isSubmenuOpen;

            // Переключаємо видимість підменю
            submenu.style.display = isSubmenuOpen ? 'block' : 'none';
            
            

            // Додаємо/вилучаємо стиль при натисканні
            if (isSubmenuOpen) {
                link.style.backgroundColor = '#333'; // Фоновий колір активного стану
                link.style.color = 'white'; // Колір тексту активного стану
                link.style.borderRadius = '8px';
            } else {
                link.style.backgroundColor = ''; // Скидаємо фоновий колір
                link.style.color = ''; // Скидаємо колір тексту
                link.style.borderRadius = '';
            }
        };
    }

    // Керування підменю тварин
    toggleSubmenu('toggleAnimalSubmenu');
    toggleSubmenu('toggleChordataSubmenu');
    toggleSubmenu('toggleMammalsSubmenu');
    toggleSubmenu('toggleBirdsSubmenu');
    toggleSubmenu('toggleReptilesSubmenu');
    toggleSubmenu('toggleAmphibiaSubmenu');
    toggleSubmenu('toggleFishfinraysSubmenu');
    toggleSubmenu('toggleLampreysSubmenu');
    toggleSubmenu('toggleIntestinalSubmenu');
    toggleSubmenu('toggleRoundwormsSubmenu');
    toggleSubmenu('toggleRingwormsSubmenu');
    toggleSubmenu('toggleArthropodaSubmenu');
    // Рослини нижче
    toggleSubmenu('togglePlantSubmenu');
    toggleSubmenu('toggleTracheophytaSubmenu');
    toggleSubmenu('toggleFungiSubmenu');
    toggleSubmenu('toggleAlgaeSubmenu');
    toggleSubmenu('toggleBryophytaSubmenu');
    toggleSubmenu('toggleLichensSubmenu');
    
    // Покритонасінні
    toggleSubmenu('toggleMagnoliophytaSubmenu');

    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    searchButton.onclick = function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        let pageToOpen = '';
        switch (searchTerm) {
            case 'зубр':
                pageToOpen = 'zubr.html';
                break;
            case 'рись':
                pageToOpen = 'riss.html'; 
                break;
            case 'їжак':
                pageToOpen = 'riss.html'; 
                break;
            case 'ведмідь':
                pageToOpen = 'riss.html'; 
                break;
            case 'горностай':
                pageToOpen = 'riss.html'; 
                break;
            case 'кіт':
                pageToOpen = 'riss.html'; 
                break;
            case 'афаліна':
                pageToOpen = 'riss.html'; 
                break;
            case 'видра':
                pageToOpen = 'riss.html'; 
                break;
            case 'заєць':
                pageToOpen = 'riss.html'; 
                break;
            // Додайте інші випадки за потреби
            default:
                alert('Не знайдено!');
                return;
        }
        window.location.href = pageToOpen;
    };

});
