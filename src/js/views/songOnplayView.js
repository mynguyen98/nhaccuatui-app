import View from './view.js';

class SongOnplayView extends View {
  _parentElement = document.querySelector('.playlist-onplay');

  generateMarkup() {
    return `
   <h2 class="playlist-descript">Đang Phát</h2>
              <div class="song-list-item song-list-item-leftside " id=${
                this._data.key
              }>
                <div class="song-options hidden">
                  <ul class="song-option-list">
                    <li class="song-option-item">
                      <i class="fa-solid fa-cloud-arrow-up"></i>
                      <p class="add-to">Thêm vào cloud</p>
                    </li>
                    <li class="song-option-item">
                      <i class="fa-regular fa-square-plus"></i>
                      <p class="add-to">Thêm vào chờ phát</p>
                    </li>
                  </ul>
                </div>

                <div class="song-item-content">
                  <div class="song-item-img">
                    <img
                      src="${this._data.thumbnail}"
                      alt=""
                    />
                  </div>
                  <div>
                  <div
                    class="link-subject song-item-name song-item-name-leftside"
                  >
                  ${this._data.title}
                  </div>
                  <div class="singer-name leftside-singer-name">
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

export default new SongOnplayView();
{
  /* <div class="icon-more-option">
<i class="fa-solid fa-ellipsis-vertical"></i>
</div> */
}
