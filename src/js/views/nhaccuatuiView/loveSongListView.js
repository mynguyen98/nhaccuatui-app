import View from '../view.js';
const playLoveListBtn = document.querySelector('.love-song-play-btn');
class loveSongListView extends View {
  _parentElement = document.querySelector('.love-song-list-container');
  addHandlerplayAllList(dataPlaylist, dataLoveSong, handler) {
    playLoveListBtn.addEventListener('click', () => {
      dataPlaylist.songs = dataLoveSong;
      handler(true);
    });
  }
  addHandlerDeleteSong(handler) {
    const deleteBtns = document.querySelectorAll('.song-options--remove-love');
    deleteBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        let removeEl = e.target.closest('.love-song-list-item');
        let orderEl = removeEl.dataset.order;
        handler(orderEl);
        removeEl.remove();
      });
    });
  }
  generateMarkup() {
    return `
    ${this._data
      .map((song, i) => {
        return `
        <div class="song-list-item love-song-list-item song-list-item--data" id="${
          song.key
        }" data-order="${i}">
        <div class="love-song-list-item-container">
    
          <div class="song-options hidden ">
            <ul class="song-option-list">
              <li class="song-option-item song-options--remove-love">
              <i class="fa-solid fa-trash-can"></i>
                <p class="add-to">Xóa khỏi yêu thích</p>
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
          <div class="song-home-item-content song-item-content love-song-item-content">
            <div class="song-item-img">
              <img class ="love-song-item-img"
                src="${song.thumbnail}"
                alt=""
              />
            </div>
    
            <div>
              <h3 class="link-subject song-item-name love-song-item-name">
                ${song.title}
              </h3>
            </div>
          </div>
        </div>
        <div class="singer-name love-song-singer-name">
        ${song.artists
          .map((artist, i) => {
            return i + 1 === song.artists.length
              ? `<span class="common-link"> ${artist.name}</span>`
              : `<span class="common-link"> ${artist.name},</span>`;
          })
          .join('')}
        </div>
        <div class="love-song-time"><p class="love-song-time-num">${
          song.duration
        }</p></div>
      </div>
            
        `;
      })
      .join('')}
    `;
  }
}

export default new loveSongListView();
