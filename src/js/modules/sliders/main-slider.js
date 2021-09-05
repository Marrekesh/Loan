import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(container, btns) {
        super(container, btns);

    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.index = 1;
        }

        if (n < 1) {
            this.index = this.slides.length;
        }

        try {
            this.hanson.style.opacity = '0';
            if (n === 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('slideInUp');
                }, 3000)
            }


        } catch(e){}

        this.slides.forEach(slide => {
            slide.style.display = 'none';
            slide.classList.add('animated');
        })

        this.slides[this.index - 1].style.display = 'block';
    }


    plusSlide(n) {
        this.showSlides(this.index += n)
    }

    render() {
        try {
            this.hanson = document.querySelector('.hanson');
        } catch(e){}


        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlide(1);
                this.slides[this.index - 1].classList.add('fadeIn');
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.index = 1;
                this.showSlides(1);
            });
        });



        this.showSlides(this.index);
    }
}