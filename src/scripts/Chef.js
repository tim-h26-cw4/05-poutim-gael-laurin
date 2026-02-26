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
    this.container.innerHTML = ''; // Vide le conteneur du reçu de commande
    this.createHeader(); // Crée le titre du reçu de commande

    // Compter les poutines sélectionnées
    let total_poutines = 0;
    for (let i = 0; i < this.menu.length; i++) {
      const poutine = this.menu[i];
      if (poutine.selectedType != '') {
        // Compte la poutine si une poutine a été sélectionnée
        total_poutines++;
        this.createListItem(total_poutines, poutine.selectedType); // Créer un article sur le reçu de la commande
      }
    }

    this.createFooter(total_poutines); // Ajoute le footer au reçu de commande
  }

  createHeader() {
    const title = document.createElement('h2');
    title.textContent = 'Voici le résumé de votre commande :';
    this.container.appendChild(title);
  }

  createListItem(index, type) {
    const p = document.createElement('p');
    p.textContent = ` Poutine #${index} - ${type}`;
    this.container.appendChild(p);
  }

  createFooter(amount) {
    const p = document.createElement('p');
    p.textContent = `Nombre total de poutine(s) : ${amount}`;
    this.container.appendChild(p);
  }
}
