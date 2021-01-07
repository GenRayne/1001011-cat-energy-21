// ---------------------- Main Nav ----------------------

const CLOSED_MENU_CLASS = 'nav--closed';
const CLOSED_BUTTON_CLASS = 'nav-button--menu-closed';

const html = document.querySelector('html');
const menu = document.querySelector('.nav');
const menuButton = document.querySelector('.nav-button');

html.classList.remove('no-js');
menuButton.classList.remove('nav-button--no-js');

const closeMenu = () => {
  menu.classList.add(CLOSED_MENU_CLASS);
  menuButton.classList.add(CLOSED_BUTTON_CLASS);
};

const openMenu = () => {
  menu.classList.remove(CLOSED_MENU_CLASS);
  menuButton.classList.remove(CLOSED_BUTTON_CLASS);
};

const handleOpenMenu = () => {
  openMenu();
  menuButton.removeEventListener('click', handleOpenMenu);
  menuButton.addEventListener('click', handleCloseMenu);
};

const handleCloseMenu = () => {
  closeMenu();
  menuButton.removeEventListener('click', handleCloseMenu);
  menuButton.addEventListener('click', handleOpenMenu);
};

closeMenu();
menuButton.addEventListener('click', handleOpenMenu);

// ---------------------- Slider ----------------------

const SliderClassName = {
  DEFAULT: 'slider-container',
  BEFORE: 'slider-container--before',
  AFTER: 'slider-container--after',
};

const sliderImage = document.querySelector(`.${SliderClassName.DEFAULT}`);
const beforeButton = document.querySelector('.slider__text--before');
const afterButton = document.querySelector('.slider__text--after');

if (sliderImage && beforeButton && afterButton) {
  handleStateButtonClick = (classToRemove, classToAdd) => () => {
    if (sliderImage.classList.contains(classToRemove)) {
      sliderImage.classList.remove(classToRemove);
    }
    sliderImage.classList.add(classToAdd);
  }

  beforeButton.addEventListener('click', handleStateButtonClick(SliderClassName.AFTER, SliderClassName.BEFORE));
  afterButton.addEventListener('click', handleStateButtonClick(SliderClassName.BEFORE, SliderClassName.AFTER));
}

// ---------------------- Form ----------------------

const INVALID_CLASS = 'input__field--invalid';
const form = document.querySelector('.program-form');
const submitButton = document.querySelector('.program-form__sumbit-button');
const requiredFields = document.querySelectorAll('.input__field--required');

if (form && submitButton && requiredFields.length) {
  requiredFields.forEach((field) => {
    field.removeAttribute('required');
  });

  const markInvalid = (field) => {
    field.classList.add(INVALID_CLASS);

    const handleInput = () => {
      field.classList.remove(INVALID_CLASS);
      field.removeEventListener('input', handleInput);
    };

    field.addEventListener('input', handleInput);
  };

  const handleSubmit = (event) => {
    requiredFields.forEach((field) => {
      if (!field.value) {
        event.preventDefault();
        markInvalid(field);
      }
    });
  };

  form.addEventListener('submit', handleSubmit);
}
