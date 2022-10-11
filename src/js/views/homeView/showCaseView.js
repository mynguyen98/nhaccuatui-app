import View from '../view.js';

class ShowCaseView extends View {
  _parentElement = document.querySelector('.slider-container');
  generateMarkup() {
    return `<div class="main-container">
    <div class="slider">
    ${this._data.showcase
      .map(
        (show, i) =>
          `
      <div class="slider-top ${i === 0 ? 'slide-active' : ''} ">
      <img src="${show.imageUrl}" alt="${show.description}" />
      </div>
      `
      )
      .join('')}
    </div>
    <div class="slide-scrolls">
      <button class="slide-prev">
        <i class="fa-solid fa-chevron-left icon-scroll"></i>
      </button>
      <button class="slide-next">
        <i class="fa-solid fa-chevron-right icon-scroll"></i>
      </button>
    </div>
    <div class="container-dot"></div>
  </div>
    `;
  }
}

export default new ShowCaseView();
{
  /* <div class="main-container">
            <div class="slider">
              <div class="slider-top">
                <img
                  class="slide-active"
                  src="./src/img/1663657310678.jpg"
                  alt=""
                />
              </div>
              <div class="slider-top">
                <img src="./src/img/1663744981720.jpg" alt="" />
              </div>
              <div class="slider-top">
                <img src="./src/img/1663844245673.jpg" alt="" />
              </div>
              <div class="slider-top">
                <img src="./src/img/1663899594569.jpg" alt="" />
              </div>
              <!-- <div class="slider-top"></div>
              <div class="slider-top"></div> -->
            </div>
            <div class="slide-scrolls">
              <button class="slide-prev">
                <i class="fa-solid fa-chevron-left icon-scroll"></i>
              </button>
              <button class="slide-next">
                <i class="fa-solid fa-chevron-right icon-scroll"></i>
              </button>
            </div>
            <div class="container-dot"></div>
          </div>

${this._data.showcase
  .map(
    (show, i) =>
      `
  <div class="slider-top">
  <img src="${show.imageUrl}" alt="${show.description}" />
  </div>
  `
  )
  .join('')} */
}
