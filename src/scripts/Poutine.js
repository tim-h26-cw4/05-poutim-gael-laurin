export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.js-button');
    this.selectedType = '';
    this.init();
  }

  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
    }
  }

  selectType(event) {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
    }
    event.currentTarget.classList.add('is-active');
    this.selectedType = event.currentTarget.dataset.type;

    this.updatePhoto();
  }

  updatePhoto() {
    const image = this.element.querySelector('.js-image');
    image.classList.add('is-active');
    image.src = `assets/images/${this.selectedType}.png`;
  }
}
