import View from './view.js';

const lyricModal = document.querySelector('.lyric');
const modalBtn = document.querySelector('.btn--close-modal');
class LyricView extends View {
  _parentElement = document.querySelector('.lyric-word');

  addHandlerClickShowLyric(handler, classEl) {
    const lyricItems = document.querySelectorAll('.song-option-item--lyric');
    lyricItems.forEach(lyric => {
      lyric.addEventListener('click', e => {
        let key = e.target.closest(classEl).id;
        console.log(e.target.closest(classEl));
        this.addHandlerShowLyricsModal();
        handler(key);
      });
    });
  }
  addHandlerShowLyricsModal() {
    lyricModal.classList.remove('hidden');
  }
  addHanderClickLyricModal() {
    window.onclick = function (event) {
      if (
        event.target == lyricModal ||
        event.target.classList.contains('btn--close-modal')
      ) {
        lyricModal.classList.add('hidden');
      }
    };
    // modalBtn.addEventListener('click', () => {
    //   lyricModal.classList.add('hidden');
    // });
  }
  generateMarkup() {
    return `
    ${
      this._data ? `<div>${this._data}</div>` : 'Lời bài hát chưa được cập nhật'
    }
    `;
  }
}

export default new LyricView();
