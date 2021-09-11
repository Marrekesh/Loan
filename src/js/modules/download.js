export default class Download {
    constructor(trigger) {
        this.trigger = document.querySelectorAll(trigger);
        this.path = 'assets/img/evolve.jpg';
    }

    download(path) {
        const element = document.createElement('a');
        element.setAttribute('download', 'my_picture');
        element.setAttribute('href', path);
        element.setAttribute('type', 'button');
        element.style.display = 'none';
        document.body.appendChild(element);

        element.click(function(e) {
            return false;
        });

        element.remove();
    }

    init() {
        this.trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                this.download(this.path);
            })
        })
    }
}