// Hamburger
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
      closeOverl = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


closeOverl.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// Скрипт, чтобы эллемент менял цвет после определенного количества прокрутки
const linkStyle = document.querySelectorAll('.sidepanel__link svg path')
//Коллекция дом элементов, т.е все элементы, у которых есть такой класс 
//Вешаем обработчик событий на все окно, как только достигнем 500 пикселей, добавим всем элементам инлайн стилей
document.addEventListener('scroll', () => {
  if (window.pageYOffset >=950){
    linkStyle.forEach(el => el.style.fill = 'black')
    linkStyle.forEach(el => el.style.transition = '0.5s all')
  } else {
    linkStyle.forEach(el => el.style.fill='white')
  }
})

const TextMenu = document.querySelectorAll('.sidepanel__text span')
document.addEventListener('scroll', () => {
  if (window.pageYOffset >=700){
    TextMenu.forEach(el => el.style.color = 'black')
    TextMenu.forEach(el => el.style.transition = '0.5s all')

  }else{
    TextMenu.forEach(el => el.style.color='white')
  }
})
const MenuDevider = document.querySelectorAll('.sidepanel__divider')
document.addEventListener('scroll', () => {
  if (window.pageYOffset >=870){
    MenuDevider.forEach(el => el.style.backgroundColor = 'black')
    MenuDevider.forEach(el => el.style.transition = '0.5s all')
  }else{
    MenuDevider.forEach(el => el.style.backgroundColor='white')
  }
})

// Плавное появление и исчезание элемента
const linkShow = document.querySelector('.sidepanel')
document.addEventListener('scroll', () => {
  if (window.pageYOffset >=3500){
    document.querySelector('.sidepanel').classList.add('hidden');
  }else{
    document.querySelector('.sidepanel').classList.remove('hidden');
  }
})
