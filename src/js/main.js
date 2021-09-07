import MainSlider from "./modules/sliders/main-slider";
import PlayVideo from './modules/playVideo';
import SliderMini from './modules/sliders/slider-mini'
import Card from "./modules/card";
import Form from './modules/form';

window.addEventListener('DOMContentLoaded', () => {
    //MAIN SLIDER
    const slider = new MainSlider({ container:'.page',  btns:'.next'});
    slider.render();

    const sliderModuleapp = new MainSlider({ container:'.moduleapp',  btns:'.next', prev: '.prevmodule', next: '.nextmodule'});
    sliderModuleapp.render();

    

    // MINI SLIDERS
    const sliderShowup = new SliderMini({
        container: '.showup__content-slider',
        prev: '.showup__prev', 
        next: '.showup__next',
        activeClass: 'card-active',
        animated: true
    });
    sliderShowup.init();

    const modulesSlider = new SliderMini({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev', 
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animated: true
    });
    modulesSlider.init();

    const feedSlider = new SliderMini({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev', 
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active',
    });
    feedSlider.init();

    //MAIN VIDEO
    const video = new PlayVideo('.showup .play', '.overlay');
    video.init();

    //CARD
    const cardOfficerOld = new Card('.officerold', '.officerold .plus');
    cardOfficerOld.init();

    const cardOfficerNew = new Card('.officernew', '.officernew .plus');
    cardOfficerNew.init();

    //FORM

    const mainForm = new Form('.join__wrapper form', 'input', '[data-email]');
    mainForm.init();

    const sheduleForm = new Form('.schedule__form form', 'input', '[data-email]');
    sheduleForm.init();
})