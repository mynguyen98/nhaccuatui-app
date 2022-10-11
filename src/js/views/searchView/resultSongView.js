import View from '../view.js';

class ResultSongView extends View {
  _parentElement = document.querySelector('.search-song');

  generateMarkup() {
    return `
    <h2 class="header-second">Bài Hát</h2>
    <div class="search-song-container">
    ${this._data
      .map(song => {
        return `
            <div class="song-list-item song-list-item-home song-list-item-search song-list-item--data" id="${
              song.key
            }">
            <div class="song-options hidden">
            <ul class="song-option-list">
            
                 <li class="song-option-item song-option-item--cloud">
                 <i class="fa-solid fa-heart"></i>
                <p class="add-to">Thêm vào yêu thích</p>
                </li>
                <li class="song-option-item song-options--download">
                <i class="fa-solid fa-download"></i>
                  <p class="add-to">Tải bài hát</p>
                </li>
                <li class="song-option-item song-option-item--lyric">
                <i class="fa-solid fa-book"></i>
                <p class="add-to">Lời bài hát</p>
                </li>
            </ul>
            </div>
            <div class="icon-more-option">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
            <div class="song-home-item-content song-item-content">
            <div class="song-item-img">
                <img
                src="${
                  song.thumbnail
                    ? song.thumbnail
                    : 'https://stc-id.nixcdn.com/v12/static/media/default_song_no_cover.a876da66.png'
                }"
                alt=""
                />
            </div>

            <div class="song-description-container">
                <div class="link-subject song-item-name">
                ${song.title}
                </div>
                <div class="singer-name">
                ${song.artists
                  .map((artist, i) => {
                    return i + 1 === song.artists.length
                      ? `<span class="common-link"> ${artist.name}</span>`
                      : `<span class="common-link"> ${artist.name},</span>`;
                  })
                  .join('')}
                </div>
            </div>
            </div>
        </div>
            
        `;
      })
      .join('')}
    </div>
    `;
  }
}
export default new ResultSongView();
