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
    const buttonType = event.currentTarget.dataset.type;

    if (buttonType == this.selectedType) {
      // Si ce type de poutine est déjà sélectionné,
      // Désactive l'état actif du bouton
      event.currentTarget.classList.remove('is-active');

      // Enlève le type de poutine sélectionné
      this.selectedType = '';
    } else {
      // Change l'état actif des boutons
      for (let i = 0; i < this.types.length; i++) {
        const type = this.types[i];
        type.classList.remove('is-active');
      }
      event.currentTarget.classList.add('is-active');

      // Change le type de poutine sélectionné
      this.selectedType = buttonType;
    }

    // Met à jour l'image de poutine
    this.updatePhoto();
  }

  updatePhoto() {
    const image = this.element.querySelector('.js-image');

    if (this.selectedType == '') {
      // Pas de poutine sélectionnée
      image.classList.remove('is-active');
      image.src = 'assets/images/poutine.png';
    } else {
      // Met à jour l'image de poutine selon le type sélectionné
      image.classList.add('is-active');
      image.src = `assets/images/${this.selectedType}.png`;
    }
  }
}
