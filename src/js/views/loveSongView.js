import View from './view.js';
class LoveSongView extends View {
  // _parentElement = document.querySelector('.left-side-description');
  addHandlerAddLoveSong(handler, classEl) {
    const addLoveBtn = document.querySelectorAll('.song-option-item--cloud');
    addLoveBtn.forEach(btn => {
      btn.addEventListener('click', e => {
        let key = e.target.closest(classEl).id;
        handler(key);
      });
    });
  }
  generateMarkup() {
    return `
      
    `;
  }
}

export default new LoveSongView();
