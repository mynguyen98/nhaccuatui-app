import View from './view.js';
const bodyEl = document.querySelector('body');
class WaitingSongView extends View {
  _parentElement = document.querySelector('.playlist-waiting');

  getKeyFirstSong() {
    const firstSong = document.querySelectorAll('.song-list-item--data')[0];
    if (!firstSong) return;
    console.log(firstSong);
    return firstSong.id;
  }
  addHandlerPlayFirstSong(handler) {
    let key = this.getKeyFirstSong();
    if (!key) return;
    handler(key);
  }

  addHandlerAddToCloud(handler) {
    const btnAddItemsClouds = document.querySelectorAll(
      '.song-option-item--cloud'
    );
    btnAddItemsClouds.forEach(btnAddItemsCloud => {
      btnAddItemsCloud.addEventListener('click', e => {
        const key = e.target.closest('.song-list-item').id;
        console.log(key);
        handler(key);
      });
    });
  }
  addHandlerAddToWaitings(handler) {
    const btnAddItemsWaitings = document.querySelectorAll(
      '.song-option-item--waiting'
    );
    btnAddItemsWaitings.forEach(btnAddItemsWaiting => {
      btnAddItemsWaiting.addEventListener('click', e => {
        const key = e.target.closest('.song-list-item').id;
        console.log(key);
        handler(key);
      });
    });
  }
  renderWatingSong(data, index) {
    this._data = data; // copy to work with it more in other function
    const markup = this.generateMarkup(index);
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }
  generateMarkup(index) {
    return `
    <div class="song-list-item song-list-item-leftside queue-list" data-queue = '${index}'>
    <div class="song-options hidden">
      <ul class="song-option-list">
        <li class="song-option-item">
          <i class="fa-solid fa-cloud-arrow-up"></i>
          <p class="add-to">Thêm vào cloud</p>
        </li>
        <li class="song-option-item">
          <i class="fa-regular fa-square-plus"></i>
          <p class="add-to">Xóa Khỏi chờ phát</p>
        </li>
      </ul>
    </div>
    <div class="icon-more-option">
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
    <div class="song-item-content song-item-content--waiting">
      <div>
        <div class="link-subject song-item-name">
          ${this._data.title}
        </div>
        <div class="singer-name">
        ${this._data.artists
          .map((artist, i) => {
            return i + 1 === this._data.artists.length
              ? `<span class="common-link"> ${artist.name}</span>`
              : `<span class="common-link"> ${artist.name},</span>`;
          })
          .join('')}
        </div>
      </div>
    </div>
  </div>
    `;
  }
}

export default new WaitingSongView();
