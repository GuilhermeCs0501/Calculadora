function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.clicaBtn();
    }

    this.clicaBtn = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.display.value += el.innerHTML;
            }

            if (el.classList.contains('btn-clear')) {
                this.limpar();
            }

            if (el.classList.contains('btn-back')) {
                this.volta();
            }

            if (el.classList.contains('btn-resul')) {
                this.resultado();
            }
        });
    }

    this.limpar = () => {
        this.display.value = '';
    }

    this.volta = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.resultado = () => {
        try {
            let conta = this.display.value;

            let numeros = conta.split(/[+\-x:]/).map(Number);

            let operadores = conta.match(/[+\-x:]/g);

            let resultado = numeros[0];

            for (let i = 0; i < operadores.length; i++) {

                switch (operadores[i]) {

                    case '+':
                        resultado += numeros[i + 1];
                        break;

                    case '-':
                        resultado -= numeros[i + 1];
                        break;

                    case 'x':
                        resultado *= numeros[i + 1];
                        break;

                    case ':':
                        resultado /= numeros[i + 1];
                        break;
                }
            }

            this.display.value = resultado;

        } catch (e) {
            alert('Conta inválida');
        }
    }
}

const c1 = new Calculadora();
c1.inicia();