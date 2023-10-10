// Форма поиска
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('header__search-form--active');
  });

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('header__search-form--active');
  });

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
  });
});


// Форма входа (popup)
document.getElementById('enter').addEventListener('click', function () {
  document.getElementById('popup').classList.add('open');
  document.body.classList.add('active');
});

document.getElementById('close').addEventListener('click', function () {
  document.getElementById('popup').classList.remove('open');
  document.body.classList.remove('active');
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('popup').classList.remove('open');
  }
})

document.querySelector("#popup .popup-wrap").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById('popup').addEventListener("click", event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open')
});


// Валидация формы входа
document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.popup-form', {
  errorLabelStyle: {
    color: '#D52B1E'
    }
  });

  validation
    .addField('.login', [
    {
      rule: 'required',
      errorMessage: "Поле необходимо заполнить"
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: "Имя слишком короткое"
    },
    {
      rule: 'maxLength',
      value: 10,
      errorMessage: "Имя слишком длинное"
    }
    ])
    .addField('.password', [{
      rule: 'required',
      errorMessage: "Поле необходимо заполнить"
    },
    {
      rule: 'minLength',
      value: 4,
      errorMessage: "Пароль слишком короткий"
    },
    {
      rule: 'maxLength',
      value: 10,
      errorMessage: "Пароль слишком длинный"
    }
    ]);
});


//Плеер в шапке
document.querySelector('.header__container-bottom-player-earlier-btn').addEventListener('click', function (e) {
  document.querySelector('.header__container-bottom-player-now-btn').classList.remove('header__container-bottom-player-now-btn--toggle')
  document.querySelector('.header__container-bottom-player-earlier-btn').classList.toggle('header__container-bottom-player-earlier-btn--toggle')
});

document.querySelector('.header__container-bottom-player-now-btn').addEventListener('click', function (e) {
  document.querySelector('.header__container-bottom-player-earlier-btn').classList.remove('header__container-bottom-player-earlier-btn--toggle')
  document.querySelector('.header__container-bottom-player-now-btn').classList.toggle('header__container-bottom-player-now-btn--toggle')
});

document.querySelector('.header__container-bottom-player-btn-mobile').addEventListener('click', function (e) {
  // document.querySelector('.header__container-bottom-player-earlier-btn').classList.remove('header__container-bottom-player-earlier-btn--toggle')
  document.querySelector('.header__container-bottom-player-btn-mobile').classList.toggle('header__container-bottom-player-btn-mobile--toggle')
});


// Показ дополнительных подкастов и их скрытие по нажатию кнопки
let data = Array.from(document.querySelectorAll('.podcasts__list .podcasts__list-item')),
  reset_btn = document.querySelector('.podcasts-hide-btn'),
  more_btn = document.querySelector('.podcasts-more-btn'),
  step = 2,
  item = 8;

data.slice(item).forEach(e => e.style.display = 'none');

document.querySelector('.podcasts-more-btn').addEventListener('click', function(e) {
  let tmp = data.slice(item, item + step);
  tmp.forEach(e => e.style.display = 'flex');
  item += step;

  if (item >= data.length) {
    more_btn.style.display = 'none';
    reset_btn.style.display = 'block';
  }
});

document.querySelector('.podcasts-hide-btn').addEventListener('click', function(e) {
  item = 8;
  data.slice(item).forEach(e => e.style.display = 'none');
  more_btn.style.display = 'block';
  reset_btn.style.display = 'none';
});


// Плеер подкастов
document.querySelectorAll(".podcasts__list-item-content-descr-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".podcasts__list-item-content-descr-btn").forEach(btn => {
      btn.classList.remove('btn--toggle');
    })
    btn.classList.toggle('btn--toggle');
  })
});


// Селект
const element = document.querySelector('#select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom'
});


// Аккордион
  new Accordion('.accordion-container');


// Табы
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});
// Прокрутка табов
let smoothBtn = document.querySelectorAll('.tabs-nav__btn');

smoothBtn.forEach(function (element) {
  element.addEventListener('click', function () {
    document.getElementById("tabs").scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  });
});


// Слайдер
const swiper = new Swiper('.swiper', {
	slidesPerView: 2,
	slidesPerGroup: 1,
	spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 30
    },
  }
});


// Валидация формы отзыва
document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.about-us__form', {
  errorLabelStyle: {
    color: '#D52B1E'
    }
  });

  validation
    .addField('.comment', [
    {
      rule: 'required',
      errorMessage: "Поле необходимо заполнить"
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: "Минимальное кол-во символов 2"
    },
    {
      rule: 'maxLength',
      value: 100,
      errorMessage: "Максимальное кол-во символов 100"
    }
    ])
    .addField('.name', [
    {
      rule: 'required',
      errorMessage: "Поле необходимо заполнить"
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: "Имя слишком короткое"
    },
    {
      rule: 'maxLength',
      value: 10,
      errorMessage: "Имя слишком длинное"
    }
    ])
    .addField('.e-mail', [{
      rule: 'required',
      errorMessage: "Поле необходимо заполнить"
    },
    {
      rule: 'minLength',
      value: 4,
      errorMessage: "Пароль слишком короткий"
    },
    {
      rule: 'maxLength',
      value: 10,
      errorMessage: "Пароль слишком длинный"
    }
    ])
    .addField('.checkbox', [{
      rule: 'required',
      errorMessage: "Необходимо согласиться"
    }
    ]);
});


// Бургер
let burger = document.querySelector('.header__container-top-burger');
let menu = document.querySelector('.header__container-top-nav-nav');
let menuLincs = menu.querySelectorAll('.header__container-top-nav-list-item-link');
let submenu = document.querySelector('.header__container-bottom-nav');
let submenuLinks = submenu.querySelectorAll('.header__container-bottom-list-item-link');

burger.addEventListener('click', function () {
  document.querySelector("header").classList.toggle("open")
})

menuLincs.forEach(function (element) {
  element.addEventListener('click', function () {
    document.querySelector("header").classList.toggle("open")
  })
})

submenuLinks.forEach(function (element) {
  element.addEventListener('click', function () {
    document.querySelector("header").classList.toggle("open")
  })
})


// Что в эфире?
let whatBtn = document.querySelector('.header__container-bottom-what-btn');
let whatPlayer = document.querySelector('.header__container-bottom-player');

whatBtn.addEventListener('click', function () {
  whatBtn.classList.toggle('header__container-bottom-what-btn--active');
  whatPlayer.classList.toggle('header__container-bottom-player--active');
})
