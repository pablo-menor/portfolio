    //-----------------PHONE MENU------------------------------

    const menuIcon = document.querySelector('.material-icons.menu');
    const menu = document.querySelector('.menu-phone');
    const linksMenu = document.querySelectorAll('.linkMenu');
    let opened = false;


    menuIcon.addEventListener('click', () => {
        if (opened) {
            menu.classList.remove('open-menu');
            opened = false;
        }
        else if (!opened) {
            menu.classList.add('open-menu');
            opened = true;
        }

    })

    linksMenu.forEach(link =>
        link.addEventListener('click', () => {
            menu.classList.remove('open-menu');
        }))