import View from './view.js';
const timeSong = document.querySelector('.time-song');
class SongView extends View {
  _parentElement = document.querySelector('.left-side-description');
  _audioEl = document.querySelector('audio');

  generateMarkup() {
    this._audioEl.src = `${this._data.streamUrl}`;
    timeSong.textContent = this._data.duration;
    return `
    <div class="left-side-song-des">
     <div class="left-side-img-container">
       <img
         src="${this._data.thumbnail}"
         alt="Song play image"
         class="left-side-img"
       />
     </div>
     <a href="#" class="song-play-name common-link">${this._data.title}</a>
     <a href="#" class="song-play-singer"
       >          
       ${this._data.artists
         .map((artist, i) => {
           return i + 1 === this._data.artists.length
             ? `<span class="common-link"> ${artist.name}</span>`
             : `<span class="common-link"> ${artist.name},</span>`;
         })
         .join('')}
     </a>
   </div>
    `;
  }
}

export default new SongView();
