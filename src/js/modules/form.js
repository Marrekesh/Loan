export default class Form {
    constructor(form, input, emailInput) {
       
        try { 
            this.form = document.querySelector(form);
            this.inputs = this.form.querySelectorAll(input);
            this.eInput = this.form.querySelectorAll(emailInput);
        } catch(e){}

    }

    async postData(url, data) {
        const res = await fetch(url, {
            method:'POST',
            body: data
        })

        return await res.text();
    }

    clearInputs() {
        this.inputs.forEach(input => {
            input.value = '';
        });
    }

    validate() {
        try {
            this.eInput.forEach(input => {
                input.addEventListener('keypress', (e) => {
                    if (e.key.match(/[^a-z @ \.]/ig)) {
                        e.preventDefault();
                    }
                })
            
            })
        } catch (e){}

    }

    mask() {
        let setCursorPosition = (pos, elem) => {
            elem.focus();
            
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                let range = elem.createTextRange();
    
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };
    
        function createMask(event) {
            let matrix = '+1 (___) ___-__',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');
    
            if (def.length >= val.length) {
                val = def;
            }
    
            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });
    
            if (event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                }
            } else {
                setCursorPosition(this.value.length, this);
            }
        }
    
        let inputs = document.querySelectorAll('[name="phone"]');
    
        inputs.forEach(input => {
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });
    }

    main(message) {
        try {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();

                let messageBlock = document.createElement('div');
                messageBlock.classList.add('animated', 'fadeInUp');
                messageBlock.textContent = message.loading;
                // messageBlock.style.fontSize = '20px';
                messageBlock.style.cssText = `
                display: flex;
                padding: 50px 0;
                font-size: 50px;
                color: #ccc;
                text-align: center;
                justify-content: center;
                `;
                this.form.parentNode.appendChild(messageBlock);

                this.form.classList.add('animated', 'fadeInOut');
                setTimeout(() => {
                    this.form.style.display = 'none';
                }, 400);


                const formData = new FormData(this.form);

                this.postData('assets/question.php', formData)
                    .then(res => {
                        console.log(res);
                        messageBlock.textContent = message.accept;
                    })
                    .catch(() => {
                        console.log('что-то не так');
                        messageBlock.textContent = message.fail;
                    })
                    .finally(() => {
                        this.clearInputs();
                        setTimeout(() => {
                            messageBlock.remove();
                            this.form.style.display = 'block';
                            this.form.classList.remove('fadeInOut');
                            this.form.classList.add('fadeInUp');
                        }, 4000)
                    })
                    
            })
        } catch (e){}
            
    }

    init() {

       let message = {
            accept: 'Спасибо! Мы с вами свяжемся',
            fail: 'Что-то пошло не так',
            loading: 'Загрузка'
        }
        this.validate();
        this.main(message);
        this.mask();
    }
}