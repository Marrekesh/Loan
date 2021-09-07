import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(btns, prev, next) {
        super(btns, prev, next);

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
                } else {
                    this.hanson.classList.remove('slideInUp');
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

    bindTrigger() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlide(1);
                // this.slides[this.index - 1].classList.add('fadeIn');
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.index = 1;
                this.showSlides(this.index);
            });
        });

        if (this.prev && this.next) {
            this.prev.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    this.plusSlide(-1)
                });
            })

            this.next.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    this.plusSlide(1)
                })
            });
        }

        // document.querySelectorAll('.prevmodule').forEach(item => {
        //     item.addEventListener('click', (e) => {
        //         e.stopPropagation();
        //         e.preventDefault();
        //         this.plusSlide(-1);
        //     });
        // });

        // document.querySelectorAll('.nextmodule').forEach(item => {
        //     item.addEventListener('click', (e) => {
        //         e.stopPropagation();
        //         e.preventDefault();
        //         this.plusSlide(1);
        //     });
        // });



    }

    render() {
        if (this.container) {
            try {
                this.hanson = document.querySelector('.hanson');
            } catch(e){}



            this.showSlides(this.index);
            this.bindTrigger();
            
        }
 
    }
}