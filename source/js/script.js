// ---------------------- Main Nav ----------------------

const CLOSED_MENU_CLASS = 'nav--closed';
const CLOSED_BUTTON_CLASS = 'nav-button--menu-closed';
const menuButton = document.querySelector('.nav-button');
const menu = document.querySelector('.nav');

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
menuButton.classList.remove('nav-button--no-js');
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
  const handleBeforeButtonClick = () => {
    if (sliderImage.classList.contains(SliderClassName.AFTER)) {
      sliderImage.classList.remove(SliderClassName.AFTER);
    }
    sliderImage.classList.add(SliderClassName.BEFORE);
  };

  const handleAfterButtonClick = () => {
    if (sliderImage.classList.contains(SliderClassName.BEFORE)) {
      sliderImage.classList.remove(SliderClassName.BEFORE);
    }
    sliderImage.classList.add(SliderClassName.AFTER);
  };

  beforeButton.addEventListener('click', handleBeforeButtonClick);
  afterButton.addEventListener('click', handleAfterButtonClick);
}
