export default class PlayVideo {
    constructor(btns, modal) {
        this.btns = document.querySelectorAll(btns);
        this.modal = document.querySelector(modal);
        this.close = this.modal.querySelector('.close');
    }

    bintBtns() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (document.querySelector('iframe#frame')) {
                    this.modal.style.display = 'flex';
                } else {
                    const path = btn.getAttribute('data-url');
                    this.createPlayer(path);
                }
            })
        })
    }

    createPlayer(id) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${id}`,
        });
        this.modal.style.display = 'flex';
    }

    closePlayer() {
        this.modal.addEventListener('click', (e) => {
            if(e.target === this.modal) {
                this.modal.style.display = 'none';
                this.player.stopVideo();
            }
        });

        this.close.addEventListener('click', () => {
            this.modal.style.display = 'none';
            this.player.stopVideo();
        });

    }

    init() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bintBtns();
        this.closePlayer();
    }
}