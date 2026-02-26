export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.js-button');
    this.selectedType = '';
    this.init();
  }

  init() {
    // Ajoute les écouteurs de clic sur les boutons de choix de poutine
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    // Change l'état actif des boutons
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
    }
    event.currentTarget.classList.add('is-active');

    // Change le type de poutine sélectionné
    this.selectedType = event.currentTarget.dataset.type;

    // Met à jour l'image de poutine
    this.updatePhoto();
  }

  updatePhoto() {
    // Met à jour l'image de poutine selon le type sélectionné
    const image = this.element.querySelector('.js-image');
    image.classList.add('is-active');
    image.src = `assets/images/${this.selectedType}.png`;
  }
}
