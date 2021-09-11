export default class PlayVideo {
    constructor(btns, modal) {
        this.btns = document.querySelectorAll(btns);
        this.modal = document.querySelector(modal);
        this.close = this.modal.querySelector('.close');
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }

    bintBtns() {
        this.btns.forEach((btn, i )=> {
            try {
                const blockedElem = btn.closest('.module__video-item').nextElementSibling;

                if (i % 2 == 0) {
                    blockedElem.setAttribute('data-disabled', 'true');
                }
            } catch(e){}

            btn.addEventListener('click', () => {
                if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
                    this.activeBtn = btn;
                    if (document.querySelector('iframe#frame')) {
                        this.modal.style.display = 'flex';
                        if (this.path !== btn.getAttribute('data-url')) {
                            this.path = btn.getAttribute('data-url');
                            this.player.loadVideoById({videoId:this.path});
                            this.player.stopVideo();
                        }
                    } else {
                        const path = btn.getAttribute('data-url');
                        this.createPlayer(path);
                    }
                }
            })
        })
    }

    createPlayer(id) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${id}`,
            events: {
                'onStateChange': this.onPlayerStateChange
              }
        });
        this.modal.style.display = 'flex';
    }

    closePlayer() {
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.modal.style.display = 'none';
                this.player.stopVideo();
            }
        });

        this.close.addEventListener('click', () => {
            this.modal.style.display = 'none';
            this.player.stopVideo();
        });

    }

    onPlayerStateChange(event) {
        try {
            const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
            const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);
    
            if (event.data == 0) {
                if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
                    blockedElem.querySelector('.play__circle').classList.remove('closed');
                    blockedElem.querySelector('svg').remove();
                    blockedElem.querySelector('.play__circle').appendChild(playBtn);
                    blockedElem.querySelector('.play__text').textContent = 'Play video';
                    blockedElem.querySelector('.play__text').classList.remove('attention');
                    blockedElem.style.opacity = '1';
                    blockedElem.style.filter = 'none';
                    blockedElem.setAttribute('data-disabled', 'false');
                }
            }
        } catch (e){}

    }

    init() {

        if (this.btns.length > 0) {
            const tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            this.bintBtns();
            this.closePlayer(); 
        }
    }
}