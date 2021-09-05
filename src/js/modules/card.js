export default class Card {
    constructor(container, addClick) {
        this.container = document.querySelector(container);
        this.items = this.container.children;
        this.addClick = this.container.querySelector(addClick)
    }

    hideCards() {
        this.items.forEach((item, i, arr) => {
            if (item !== arr[this.items.length - 1] && item !== arr[0]) {
                item.style.display = 'none'
            }
        })
    }

    showCards() {
        let count = 1;
        this.addClick.addEventListener('click', () => {
            this.items[count].classList.add('animated', 'fadeIn');
            this.items[count].style.display = 'flex'
            count += 1
            if (count == this.items.length - 1) {
                this.items[this.items.length - 1].remove();
            }
        })
    }

    init() {
        this.hideCards();
        this.showCards()
    }
    
}