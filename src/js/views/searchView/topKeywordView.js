import View from '../view.js';

class TopKeywordView extends View {
  _parentElement = document.querySelector('.searching-list-item');

  generateMarkup() {
    console.log(this._data);
    return `
    ${this._data
      .map((keyword, i) => {
        return `
      <li class="searching-item searching-keyword" id="${keyword}">
      <div><span>#${i}</span><p class="value-search-top">${keyword}</p></div>
    </li>
        `;
      })
      .join('')}
    `;
  }
}

export default new TopKeywordView();
