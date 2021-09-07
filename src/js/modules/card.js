export default class Card {
    constructor(container, addClick) {
        this.container = document.querySelector(container);
        try{this.items = this.container.children;
        this.addClick = this.container.querySelector(addClick)} catch(e){};
    }

    hideCards() {
        try {
            this.items.forEach((item, i, arr) => {
                if (item !== arr[this.items.length - 1] && item !== arr[0]) {
                    item.style.display = 'none'
                }
            })
        } catch(e) {}
    }

    showCards() {
        try {
            this.addClick.addEventListener('click', () => {
                this.items[count].classList.add('animated', 'fadeIn');
                this.items[count].style.display = 'flex'
                count += 1
                if (count == this.items.length - 1) {
                    this.items[this.items.length - 1].remove();
                } 
                 let count = 1;
            })
        } catch (e){}
      

    }

    init() {
        this.hideCards();
        this.showCards()
    }
    
}