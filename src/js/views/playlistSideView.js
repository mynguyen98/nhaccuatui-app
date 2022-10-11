import View from './view.js';
const leftSideAlbumName = document.querySelector('.left-side-album-text');
let currentIndex = 0;
const wellCome = document.querySelector('.well-come-to-play');
class PlaylistSideView extends View {
  _parentElement = document.querySelector('.playlist-play');

  getKeyFirstSong() {
    const firstSong = document.querySelectorAll('.song-list-item--data')[0];
    if (!firstSong) return;
    // active fist song
    firstSong.classList.add('song-item--active');

    return firstSong.id;
  }
  addHandlerPlayFirstSong(handler) {
    let key = this.getKeyFirstSong();
    if (!key) return;
    handler(key);
  }
  addHandlerShowWellCome() {
    wellCome.classList.remove('hidden');
  }
  removeWellCome() {
    wellCome.classList.add('hidden');
  }
  addHandlerOptions() {
    window.addEventListener('click', e => {
      const songOptions = document.querySelectorAll('.song-options');
      if (
        e.target.className === 'icon-more-option' ||
        e.target.className === 'fa-solid fa-ellipsis-vertical'
      ) {
        const songOption = e.target
          .closest('.song-list-item')
          .querySelector('.song-options');
        if (songOption.classList.contains('hidden')) {
          songOptions.forEach(songOption => {
            songOption.classList.add('hidden');
          });
          songOption.classList.remove('hidden');
          return;
        }
        if (!songOption.classList.contains('hidden')) {
          songOption.classList.add('hidden');
        }
      } else {
        songOptions.forEach(songOption => {
          songOption.classList.add('hidden');
        });
      }
    });
  }

  addHandlerAddToCloud(handler) {
    const btnAddItemsClouds = document.querySelectorAll(
      '.song-option-item--cloud'
    );
    btnAddItemsClouds.forEach(btnAddItemsCloud => {
      btnAddItemsCloud.addEventListener('click', e => {
        const key = e.target.closest('.song-list-item').id;
        handler(key);
      });
    });
  }

  generateMarkup() {
    leftSideAlbumName.textContent = `Playlist: ${
      this._data.title ? this._data.title : 'Bài hát yêu thích'
    }`;
    return `
    <h2 class="playlist-descript">Danh sách bài hát</h2>
    <div class="playlist-item-border"></div>
    <div class="list-item">
    ${this._data.songs
      .map(
        (song, index) => `
    <div class="song-list-item song-list-item-leftside song-list-item--data" data-order="${index}" id=${
          song.key
        }>
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
    <div class="song-item-content song-playlist-item">
      <div>
      <div class="link-subject song-item-name song-item-name-leftside">
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
    
    `
      )
      .join('')}
  </div>
    `;
  }
}

export default new PlaylistSideView();
// /* <div class="song-number-listen">
// <i
//   class="fa-solid fa-headset headphone-icon headphone-icon--home"
// ></i>
// <p class="number-listening">158.9K</p>
// </div> */
{
  /* <li class="song-option-item song-option-item--waiting">
<i class="fa-regular fa-square-plus"></i>
<p class="add-to">Thêm vào chờ phát</p>
</li>
<li class="song-option-item song-option-item--delete">
<i class="fa-solid fa-trash-can icon-trash-side"></i>
<p class="add-to">Xóa khỏi chờ phát</p>
</li> */
}
