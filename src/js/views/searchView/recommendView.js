import View from '../view.js';

class RecommendView extends View {
  _parentElement = document.querySelector('.recommend-search');

  generateMarkup() {
    console.log(this._data);
    return `
    <h2 class="header-second recommend-search-header">Top Tìm Kiếm</h2>
    <div class="recommend-container">
      <div
        class="${
          this._data.type === 'PLAYLIST'
            ? `spot-item-container item-container-play recommend-item`
            : `song-list-item--data item-container-play recommend-song`
        }" id=${this._data.key}
      >
        <button class="home-play-btn">
          <i class="fa-solid fa-circle-play"></i>
        </button>

        <div class="spot-img-play">
          <img
            src="${
              this._data.thumbnail
                ? this._data.thumbnail
                : 'https://stc-id.nixcdn.com/v12/static/media/default_song_no_cover.a876da66.png'
            }"
            alt=""
          />
        </div>
        <button class="spot-item-onplay-btn">
          <i class="fa-solid fa-headphones"></i>
        </button>
      </div>
      <div class="recommend-content">
        <p class="recommend-stt">#1</p>
        <p class="recommend-name">${this._data.title}</p>
        <div class="recommend-singer-name">
      ${this._data.artist
        .map((artist, i) => {
          return i + 1 === this._data.artist.length
            ? `<span class="common-link"> ${artist}</span>`
            : `<span class="common-link"> ${artist},</span>`;
        })
        .join('')}
      </div>
        <p class="recommend-type">${this._data.type}</p>
      </div>
    </div>
    `;
  }
}

export default new RecommendView();
