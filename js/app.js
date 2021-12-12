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

    //-----------------TYPING EFFECT------------------------------

    const texts = ['web developer', 'full-stack developer']
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
   
  (function type() {
      if (count === texts.length) {
          count = 0;
      }

      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      document.querySelector('.typing').textContent = letter;

      if (letter.length === currentText.length) {
          count++;
          index = 0;
      }

      setTimeout(type, 170);

  }())