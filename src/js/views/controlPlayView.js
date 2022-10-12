const btnPlay = document.querySelector('.play-song');
const btnPause = document.querySelector('.pause-song');
const modal = document.querySelector('.overlay');
const modalBtn = document.querySelector('.btn--close-modal');
const btnControlList = document.querySelector('.btn-control-list');
const playlistSide = document.querySelector('.playlist-side');
const btnClosePlaylist = document.querySelector('.icon-hide-playlist-side');
const seekSlider = document.querySelector('#seek-slider');
const volumeSlider = document.getElementById('volume-slider');
const volumeUnmute = document.querySelector('.volumn-icon--unmute');
const volumemute = document.querySelector('.volumn-icon--mute');

const currentTimeContainer = document.querySelector('.time-passed');
const btnLoop = document.querySelector('.loop-song');
const wellComeEl = document.querySelector('.well-come-to-play');

// let currentVolumn;
let oldVolumn;
class ContronPlayView {
  addHandlerEvent(audio) {
    btnPlay.addEventListener('click', () => {
      audio.play();
      this.playBtn();
    });
    btnPause.addEventListener('click', () => {
      audio.pause();
      this.pauseBtn();
    });
  }
  playBtn() {
    // clear all listeners
    btnPlay.classList.remove('show');
    btnPause.classList.remove('show');

    // add to btn pause
    btnPause.classList.add('show');
  }
  pauseBtn() {
    // clear all listeners
    btnPlay.classList.remove('show');
    btnPause.classList.remove('show');

    // add to btn pause
    btnPlay.classList.add('show');
  }

  autoPlay(audio) {
    audio.play();
    this.playBtn();
  }
  addHandlerActiveSpotItem(item) {
    let spotItemsContainerEl = document.querySelectorAll(
      '.spot-item-container'
    );
    spotItemsContainerEl.forEach(spotItem => {
      spotItem.classList.remove('spot-item-active');
    });
    item.classList.add('spot-item-active');
  }
  addHandlerDownloadSong(handler, classEl) {
    const downloadItems = document.querySelectorAll('.song-options--download');
    downloadItems.forEach(item => {
      item.addEventListener('click', e => {
        let key = e.target.closest(classEl).id;
        handler(key);
      });
    });
  }
  controlModalSong(data) {
    if (!data) {
      this.addHandlerShowModal();
      return;
    }
  }
  controlModal(data, item) {
    if (!data) {
      this.addHandlerShowModal();
      return;
    }
    this.addHandlerActiveSpotItem(item);
  }
  addHanderClickPlayevent(handler) {
    let playEvents = document.querySelectorAll('.home-play-btn');
    playEvents.forEach(playEvent => {
      playEvent.addEventListener('click', e => {
        const item =
          e.target.closest('.spot-item-container') ||
          e.target.closest('.ranking-item');
        if (!item) return;
        const key = item.id;
        handler(key, item);
      });
    });
  }
  addHandlerShowModal() {
    modal.classList.remove('hidden');
  }
  addHanderClickModal() {
    modal.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
    modalBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }
  addHandlerShowPlayList() {
    btnControlList.addEventListener('click', () => {
      playlistSide.classList.toggle('hidden');
    });
    btnClosePlaylist.addEventListener('click', () => {
      playlistSide.classList.add('hidden');
    });
  }
  // CONTROL SONG
  addHandlerSong(audio) {
    audio.addEventListener('loadedmetadata', () => {
      this.setSliderMax(audio.duration);
      this.addHandlerSeekSlider(audio);
      this.audioTimeUpdate(audio);
      this.volumnUpdate(audio);
    });
  }
  audioTimeUpdate(audio) {
    audio.addEventListener('timeupdate', () => {
      seekSlider.value = Math.floor(audio.currentTime);
      currentTimeContainer.textContent = this.calculateTime(seekSlider.value);
    });
  }
  calculateTime(secs) {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  }
  setSliderMax(secs) {
    seekSlider.max = Math.floor(secs);
  }
  addHandlerSeekSlider(audio) {
    seekSlider.addEventListener('input', () => {
      currentTimeContainer.textContent = this.calculateTime(seekSlider.value);
    });
    seekSlider.addEventListener('change', () => {
      audio.currentTime = seekSlider.value;
    });
  }

  //  Control volumn
  volumnChangeMute() {
    volumeUnmute.classList.add('hidden');
    volumemute.classList.remove('hidden');
  }
  volumnChangeUnmute() {
    volumeUnmute.classList.remove('hidden');
    volumemute.classList.add('hidden');
  }
  volumnUpdate(audio) {
    volumeSlider.addEventListener('input', e => {
      const value = +e.target.value;
      if (value === 0) {
        this.volumnChangeMute();
      }
      if (value > 0) {
        this.volumnChangeUnmute();
      }
      audio.volume = value / 100;
    });
    this.volumnClick(audio);
  }
  volumnClick(audio) {
    let currentVolumn;
    volumeUnmute.addEventListener('click', () => {
      currentVolumn = audio.volume;
      // console.log(currentVolumn);
      this.volumnChangeMute();
      // console.log(currentVolumn);
      volumeSlider.value = 0;
      // audio.volume = 0;
    });
    volumemute.addEventListener('click', () => {
      this.volumnChangeUnmute();
      // console.log(currentVolumn);
      volumeSlider.value = currentVolumn * 100;
      // audio.volume = currentVolumn;
    });
  }
}
export default new ContronPlayView();
