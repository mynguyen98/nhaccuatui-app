import View from '../view.js';

class HotTopicView extends View {
  _parentElement = document.querySelector('.hot-subject-container');

  generateMarkup() {
    return `
        ${this._data
          .map((topic, i) => {
            return `
          ${
            i < 6
              ? `<div class="hot-subject-item">
          <div class="spot-item-container">
            <div class="spot-img-play">
              <img
                src="${topic.thumbURL}"
                alt=""
              />
            </div>
          </div>
        </div>`
              : ''
          }           
            `;
          })
          .join('')}
    `;
  }
}

export default new HotTopicView();
