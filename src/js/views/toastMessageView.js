import View from './view.js';

class ToastMessageView extends View {
  _parentElement = document.querySelector('.toast-container');

  displayToast(message) {
    this.render(message);
    const closeToastEl = document.querySelector('.toast-close');
    closeToastEl.addEventListener('click', e => {
      e.target.closest('.toast').remove();
    });
  }
  generateMarkup() {
    return `
    <div class="toast">
    <p class= "message">${this._data}</p>
    <div class="toast-close"><i class="fa-solid fa-circle-xmark"></i></div>
  </div>
    `;
  }
}

export default new ToastMessageView();
