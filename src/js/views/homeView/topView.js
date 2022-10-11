import View from '../view.js';

class TopView extends View {
  _parentElement = document.querySelector('.top-subject-container');

  generateMarkup() {
    return `    
        ${this._data
          .map(
            (top100, i) =>
              `
            ${
              i < 6
                ? ` <div class=" hot-subject-item">
            <div class="spot-item-container item-container-play" id="${top100.key}">
              <button class="home-play-btn">
                <i class="fa-solid fa-circle-play"></i>
              </button>

              <div class="spot-img-play">
                <img
                  src="${top100.thumbnail}"
                  alt=""
                />
              </div>
              <button class="spot-item-onplay-btn">
              <i class="fa-solid fa-headphones"></i>
            </button>
            </div>
          </div>`
                : ''
            }
        `
          )
          .join('')}
    `;
  }
}

export default new TopView();
