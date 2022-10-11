import View from '../view.js';

class HomeSongView extends View {
  _parentElement = document.querySelector('.home-song-list');

  generateMarkup() {
    return `
        ${this._data
          .map(song => {
            return `
                <div class="song-list-item song-list-item-home song-list-item--data" id="${
                  song.key
                }">
                ${
                  song.streamUrls.length === 0
                    ? `<div class="vip-icon"><i class="fa-solid fa-crown"></i></div>`
                    : ''
                }
                <div class="song-options hidden">
                <ul class="song-option-list">
                    ${
                      song.streamUrls.length > 0
                        ? `                  
                     <li class="song-option-item song-option-item--cloud">
                     <i class="fa-solid fa-heart"></i>
                    <p class="add-to">Thêm vào yêu thích</p>
                    </li>
                    <li class="song-option-item song-options--download">
                    <i class="fa-solid fa-download"></i>
                      <p class="add-to">Tải bài hát</p>
                    </li>
                    `
                        : ''
                    }
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
                    src="${song.thumbnail}"
                    alt=""
                    />
                </div>

                <div class = "song-description-container">
                    <h3 class="link-subject song-item-name">
                    ${song.title}
                    </h3>
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
    `;
  }
}

export default new HomeSongView();
