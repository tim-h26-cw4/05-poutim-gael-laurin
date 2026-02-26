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
    // Compter les poutines sélectionnées
    let total_poutines = 0;
    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];
      if (poutine.selectedType != '') {
        total_poutines++;
      }
    }

    // Créer l'élément HTML qui indique le nombre de poutines
    const p = document.createElement('p');
    p.textContent = `Nombre total de poutine(s) : ${total_poutines}`;
    this.container.innerHTML = '';
    this.container.appendChild(p);
  }
}
