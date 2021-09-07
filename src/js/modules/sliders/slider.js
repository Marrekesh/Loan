export default class Slider {
    constructor({
        container = null,
        btns = null, 
        prev = null, 
        next = null, 
        activeClass = '', 
        animated = false, 
        autoPlay = false, 
        } = {}) {
        this.container = document.querySelector(container);
        try { this.slides = this.container.children;} catch(e){}
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelectorAll(prev);
        this.next = document.querySelectorAll(next); 
        this.activeClass = activeClass;   
        this.animated = animated;
        this.autoPlay = autoPlay;
        this.index = 1;
    }
    
}