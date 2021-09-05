import MainSlider from "./modules/sliders/main-slider";
import PlayVideo from './modules/playVideo';
import SliderMini from './modules/sliders/slider-mini'

window.addEventListener('DOMContentLoaded', () => {

    const slider = new MainSlider({ container:'.page',  btns:'.next'});
    slider.render();

    const video = new PlayVideo('.showup .play', '.overlay');
    video.init();

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
})