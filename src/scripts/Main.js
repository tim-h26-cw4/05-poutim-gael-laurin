import Chef from './Chef.js';
import Icons from './utils/Icons.js';

class Main {
  constructor() {
    this.init();
  }

  init() {
    // Chargement des icônes
    Icons.load();

    // Crée les instances de composantes de chefs
    const chefs = document.querySelectorAll('[data-component="chef"]');
    for (let i = 0; i < chefs.length; i++) {
      const element = chefs[i];
      new Chef(element);
    }
  }
}

new Main();
