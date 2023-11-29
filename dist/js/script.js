// Hamburger
const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close'),
        overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () =>{
    menu.classList.add('active');
});       

close.addEventListener('click', () =>{
    menu.classList.remove('active');
}); 

overlay.addEventListener('click', () =>{
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



const form = () =>{ 
  const form = document.querySelector('form');

  const message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Я с вами скоро свяжусь',
      failure: 'Что-то пошло не так...'
  };

  //переменная с функцией, которая будет отвечать за отправку данных на сервер
  const postData = async(url, data) =>{
      document.querySelector('.status').textContent = message.loading;
      let res = await fetch(url, {
          method: "POST",
          body: data
      });

      return await res.text();
  };


  function clearInput(inputs){

      const input = document.querySelectorAll(inputs);

      input.forEach(item => {
          item.value = '';
      });
  } 

  
  form.addEventListener('submit', (e) =>{
      e.preventDefault(); //отключaем перезагрузку

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.appendChild(statusMessage); //помещаем в конец формы


      const formData = new FormData(form);
      //FormData это объект, ктр соберет все содержание в инпутах и поместить в перемен formData


      //отправляем переменую postData на сервер 
      postData('mailer/smart.php', formData)
      .then(res =>{
          console.log(res);
          statusMessage.textContent= message.success;
      })
      .catch ( ()=>{
          statusMessage.textContent= message.failure;
      })
      .finally ( ()=>{
          clearInput('input');
          clearInput('textarea');
          clearInput('checkbox');
          setTimeout ( ()=>{
              statusMessage.remove();
          },5000);
      });


  });
  
};

form();