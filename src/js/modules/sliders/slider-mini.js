import Slider from "./slider";

export default class SliderMini extends Slider {
    constructor(container, prev, next, activeClass, animated, autoPlay){
        super(container, prev, next, activeClass, animated, autoPlay);
    }

    animatedSlides() {
        this.slides.forEach(item => {
            item.classList.remove(this.activeClass);
            if (this.animated) {
                item.querySelector('.card__controls').style.opacity = '0.5';
                item.querySelector('.card__title').style.opacity = '0.4';
                item.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        if (!this.slides[0].closest('button')) {
            this.slides[0].classList.add(this.activeClass);
        }

        if (this.animated) {
            // this.slides[0].classList.add(this.activeClass);
            this.slides[0].querySelector('.card__controls').style.opacity = '1';
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        } 


    }

    switchNextSlides() {
        this.next.forEach(item => [
            item.addEventListener('click', () => {
                if (this.slides[1].tagName == 'BUTTON' && this.slides[2].tagName == 'BUTTON') {
                    this.container.appendChild(this.slides[0]);
                    this.container.appendChild(this.slides[1]);
                    this.container.appendChild(this.slides[2]);
                    this.animatedSlides();
                } else if (this.slides[1].tagName == 'BUTTON') {
                    this.container.appendChild(this.slides[0]);
                    this.container.appendChild(this.slides[1]);
                    this.animatedSlides();
                } else {
                    this.container.appendChild(this.slides[0]);
                    this.animatedSlides();
                }
                // this.container.appendChild(this.slides[0]);
                // this.animatedSlides();
            })
        ])
    }

    switchPrevSlides() {
        this.prev.forEach(item => {
            item.addEventListener('click', () => {
            
                for (let i = this.slides.length - 1; i > 0; i--) {
                    if (this.slides[i].tagName !== "BUTTON") {
                        let activeItem = this.slides[i];
                        this.container.insertBefore(activeItem, this.slides[0]);
                        this.animatedSlides();
                        break;
                    }
                   
                }
            })
        })
    }

    init() {
        try {
            this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
            `

            this.switchNextSlides();
            this.switchPrevSlides();
            this.animatedSlides();
        } catch(e) {}

    }

}