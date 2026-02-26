import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.js-container');

    this.init();
  }

  init() {
    // Crée les instances de poutine
    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      this.menu.push(new Poutine(poutine));
    }

    // Écouteur de clic sur le bouton de commande
    const bouton = this.element.querySelector('.js-order');
    bouton.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    console.log('order sent!');
  }
}
