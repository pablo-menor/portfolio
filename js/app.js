    //-----------------PHONE MENU------------------------------

    const menuIcon = document.querySelector('.material-icons.menu');
    const menu = document.querySelector('.menu-phone');
    const linksMenu = document.querySelectorAll('.linkMenu');
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');
    let opened = false;


    menuIcon.addEventListener('click', () => {
      
        if (opened) {
            menu.classList.remove('open-menu');
            opened = false;
            sections.forEach(s => s.style.display= '');
            footer.style.display= '';
        }
        else if (!opened) {
            menu.classList.add('open-menu');
            opened = true;
           
            sections.forEach(s => s.style.display= 'none');
            footer.style.display= 'none';

        }

    })

    linksMenu.forEach(link =>
        link.addEventListener('click', () => {
            menu.classList.remove('open-menu');
            sections.forEach(s => s.style.display= '');
            footer.style.display= '';
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

  //-----------------INTERSECTION OBSERVER------------------------------
//   let options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 1.0
//   }
//   let jeje = ()=>{
//       console.log('jeje');
//   }
//   let target = document.querySelector('.projects');
//   let observer = new IntersectionObserver(jeje,options);

  
// observer.observe(target);

//----------------Copy email to clipboard------------------------------

const email = document.querySelector('.email');

email.addEventListener('mouseenter', () => {
    email.style.backgroundColor = "#00B567";
})
email.addEventListener('mouseleave', () => {
    if (email.innerHTML != 'Copied!')
    email.style.backgroundColor = "#424242";

})

email.addEventListener('click', () => {
    email.innerHTML = `Copied!`;
    email.style.backgroundColor = "#00B567";
    navigator.clipboard.writeText('pablomenordeonate@gmail.com');
})
