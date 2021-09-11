export default class Accordion {
    constructor(trigger) {
        this.tigger = document.querySelectorAll(trigger);

    }

    bindTrigger() {
        this.tigger.forEach(item => {
            item.addEventListener('click', () => {
                const content = item.parentNode.nextElementSibling;

                // content.classList.remove('msg');
                // content.style.marginTop = '20px'

                if (content.classList.contains('msg')) {
                    content.classList.remove('msg');
                    content.classList.add('animated', 'fadeIn');
                    content.style.marginTop = '20px';
                } else {
                    content.classList.add('msg');
                    content.classList.remove('fadeIn');
                }
            })
        })
    }
}