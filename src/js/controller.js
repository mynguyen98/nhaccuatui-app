// import nhaccuatui from 'nhaccuatui-api-full';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
//////////////////////////////////////////////
import * as model from './model.js';
import songView from './views/songview.js';
// import controlTimeView from './views/controlTimeView.js';
import controlPlayView from './views/controlPlayView.js';
import showCaseView from './views/homeView/showCaseView.js';
import topicEventsView from './views/homeView/topicEventsView.js';
import playlistSideView from './views/playlistSideView.js';
// import controlPlayView from './views/controlPlayView.js';
import songOnplayView from './views/songOnplayView.js';
import newReleaseView from './views/homeView/newReleaseView.js';
import rankingView from './views/homeView/rankingView.js';
import videoView from './views/homeView/videoView.js';
import homeSongView from './views/homeView/homeSongView.js';
import hotTopicView from './views/homeView/hotTopicView.js';
import topView from './views/homeView/topView.js';
import lyricView from './views/lyricsView.js';
import waitingSongView from './views/waitingSongView.js';
import * as controlSlickSlide from './controlSlide.js';
////////////// Search View //////////////////////
import topKeywordView from './views/searchView/topKeywordView.js';
import searchView from './views/searchView/searchView.js';
import recommendView from './views/searchView/recommendView.js';
import resultSongView from './views/searchView/resultSongView.js';
import resultPlaylistView from './views/searchView/resultPlaylistView.js';
import historySearchView from './views/searchView/historyView.js';
//////////////////////////////////////////////
/////////////////NAVIGATION////////////////////
import navView from './views/navView.js';

/////////////////LOVE SONG ///////////////////
import loveSongView from './views/loveSongView.js';
import loveSongListView from './views/nhaccuatuiView/loveSongListView.js';
import toastMessageView from './views/toastMessageView.js';
// let currentIndex = 0;
function selectAudio() {
  return document.querySelector('audio');
}
const nextSongEl = document.querySelector('.next-song');
const prevSongEl = document.querySelector('.prev-song');
const randomSongEl = document.querySelector('.random');
const loopEl = document.querySelector('.loop-song');
const audioEl = document.querySelector('audio');
const btnPause = document.querySelector('.pause-song');
const volumnIcon = document.querySelector('.volumn-icon-wrapper');
const wellComeEl = document.querySelector('.well-come-to-play');
const playlistWaiting = document.querySelector('.playlist-waiting');

const controlSong = async function (key) {
  try {
    // 1 Load Song
    await model.loadSong(key);
    controlPlayView.controlModalSong(model.state.song.streamUrl);
    if (!model.state.song.streamUrl) return;
    // 2 renderSong to left sidebar
    songOnplayView.render(model.state.song);
    songView.render(model.state.song);
    // controlTimeView.render(model.state.song);

    // 3 control song
    const audio = selectAudio();
    controlPlayView.autoPlay(audio);
    controlPlayView.addHandlerEvent(audio);
    controlPlayView.addHandlerSong(audio);
    playlistSideView.removeWellCome();
  } catch (err) {
    throw err;
  }
};

controlLyric = async function (key) {
  try {
    await model.loadLyric(key);
    // render the lyrics and display to the overview
    lyricView.render(model.state.lyric);
  } catch (err) {
    throw err;
  }
};
const controlHome = async function () {
  try {
    // 1 Load Home
    await model.loadHome();
    // await model.loadLyric('9OYtk1NPKMrE');
    // console.log(model.state.lyric);
    // 2 render content
    showCaseView.render(model.state.home);
    topicEventsView.render(model.state.home);
    newReleaseView.render(model.state.home.newRelease.song);
    // render top 100
    topView.render(model.state.home.top100);
    // 3 add control for home
    controlSlickSlide.controlSlide();
    // controlSlickSlide.controlSlider.initSlider();
    controlSlickSlide.slickSlider();
    newReleaseView.addHandlerActiveContent();

    // ranking List
    // 4 load ranking song
    await model.loadRankingList();
    rankingView.render(model.state.home.rankingList);
    rankingView.handlerMouseOverEvent();

    // 5 Control playlist View
    controlPlayView.addHanderClickPlayevent(controlPlaylist);

    // load song
    await model.loadHomeSong(model.state.home.song);
    homeSongView.render(model.state.home.songsHome);
    controlPlayList.clickToSong('song-home-item-content', 'main');
    controlPlayList.clickToSong('new-song-item', 'main');
    lyricView.addHandlerClickShowLyric(controlLyric, '.song-list-item-home');
    controlPlayView.addHandlerDownloadSong(
      controlDownSong,
      '.song-list-item-home'
    );

    loveSongView.addHandlerAddLoveSong(
      model.addToLoveSong,
      '.song-list-item-home'
    );
    // load video view
    videoView.render(model.state.home.video);

    // render hot topic
    hotTopicView.render(model.state.home.topic);
  } catch (err) {
    throw err;
  }
};

// const addHanderClickPlayevent = async handler => {
//   let playEvents = document.querySelectorAll('.home-play-btn');
//   let key;
//   console.log(playEvents);
//   playEvents.forEach(playEvent => {
//     playEvent.addEventListener('click', e => {
//       const item = e.target.closest('.spot-item-container');
//       if (!item) return;
//       key = item.id;
//       console.log(key);
//       // this.addHandlerActiveSpotItem(item);
//     });
//   });
//   let legnthList = await handler(key);
// };
const controlPlayList = {
  currentIndex: 0,
  currentWaiting: 0,
  isPlaying: false,
  isRandom: model.state.config.isRandom,
  isRepeat: model.state.config.isRepeat,
  isLoopList: model.state.config.isLoopList,
  numSongWaiting: 0,
  prevSong() {
    this.currentIndex--;
    if (this.currentIndex < 0)
      this.currentIndex = model.state.sidePlaylist.songs.length - 1;
    this.loadCurrentSong();
  },

  nextSong() {
    this.currentIndex++;
    if (this.currentIndex >= model.state.sidePlaylist.songs.length)
      this.currentIndex = 0;
    this.loadCurrentSong();
  },
  autoPlayAList() {
    this.currentIndex++;
    if (this.currentIndex < model.state.sidePlaylist.songs.length) {
      this.loadCurrentSong();
    } else {
      btnPause.click();
    }
  },
  resetConfig() {
    this.currentIndex = 0;
  },
  randomSong() {
    let randomNum;
    randomNum = Math.floor(
      Math.random() * model.state.sidePlaylist.songs.length
    );
    this.currentIndex = randomNum;
    this.loadCurrentSong();
  },

  repeatSong() {
    // this.currentIndex = this.currentIndex;
    // this.loadCurrentSong();
    const audio = selectAudio();
    audio.load();
    audio.play();
  },
  ////////////////////Handler for playlist side left ///////////////////
  clickToSong(classEl, locate) {
    let songListEl = document.querySelectorAll(`.${classEl}`);
    // playlist song-item-content
    // home song-home-item-content
    songListEl.forEach(song => {
      song.addEventListener('click', e => {
        if (
          e.target.className !== 'icon-more-option' &&
          e.target.className !== 'fa-solid fa-ellipsis-vertical'
        ) {
          let itemEl = e.target.closest('.song-list-item--data');
          if (locate === 'side-play') {
            let order = +itemEl.dataset.order;
            this.currentIndex = order;
            this.loadCurrentSong();
          } else if (locate === 'main') {
            let key = itemEl.id;
            controlSong(key);
            this.currentIndex = this.currentIndex;
            // remove active song
            let songListEl = document.querySelectorAll('.song-list-item--data');
            songListEl.forEach(song => {
              song.classList.remove('song-item--active');
            });
          }
        }
      });
    });
  },

  addHandlerActiveSong() {
    let songListEl = document.querySelectorAll('.song-list-item--data');
    songListEl.forEach(song => {
      song.classList.remove('song-item--active');
    });
    songListEl[this.currentIndex].classList.add('song-item--active');
  },
  controlShowRandom() {
    if (this.isRandom) {
      randomSongEl.classList.add('random-active');
    } else {
      randomSongEl.classList.remove('random-active');
    }
  },
  showLoop() {
    if (this.isRepeat === false && this.isLoopList === false) {
      loopEl.classList.remove('loop-1-song');
      loopEl.classList.remove('loop-alist-song');
    } else if (this.isRepeat === false && this.isLoopList === true) {
      loopEl.classList.add('loop-alist-song');
      loopEl.classList.remove('loop-1-song');
    } else if (this.isRepeat === true && this.isLoopList === false) {
      loopEl.classList.add('loop-1-song');
      loopEl.classList.remove('loop-alist-song');
    }
  },
  controlshowLoop() {
    const audio = selectAudio();
    if (this.isRepeat === false && this.isLoopList === false) {
      loopEl.classList.add('loop-alist-song');
      this.isLoopList = true;
    } else if (this.isRepeat === false && this.isLoopList === true) {
      loopEl.classList.add('loop-1-song');
      loopEl.classList.remove('loop-alist-song');
      this.isRepeat = true;
      this.isLoopList = false;
    } else if (this.isRepeat === true && this.isLoopList === false) {
      loopEl.classList.remove('loop-1-song');
      loopEl.classList.remove('loop-alist-song');
      this.isRepeat = false;
    }
    audio.loop = this.isRepeat;
  },
  initConfig() {
    this.showLoop();
    this.controlShowRandom();
    if (model.state.config.isFirstTime) {
      playlistSideView.addHandlerShowWellCome();
      model.state.config.isFirstTime = false;
      model.persisIsFirstTime();
    }
    controlPlaylist(model.state.config.currentPlaylistKey, false, false);
    controlSong(model.state.config.currentSongKey);
  },
  // /////////////////HANDLER EVENT GLOBAL //////////////////////
  handleEvents() {
    _this = this;
    nextSongEl.addEventListener('click', () => {
      if (_this.isRandom === true && _this.isRepeat === false) {
        _this.randomSong();
      }
      if (_this.isRepeat === true) {
        _this.repeatSong();
      } else {
        _this.nextSong();
      }
    });
    prevSongEl.addEventListener('click', () => {
      if (_this.isRandom === true && _this.isRepeat === false) {
        _this.randomSong();
      }
      if (_this.isRepeat === true) {
        _this.repeatSong();
      } else {
        _this.prevSong();
      }
    });
    randomSongEl.addEventListener('click', () => {
      _this.isRandom = !_this.isRandom;
      _this.controlShowRandom();
      model.state.config.isRandom = _this.isRandom;
      model.persisRandom();
    });
    loopEl.addEventListener('click', () => {
      _this.controlshowLoop();
      model.state.config.isRepeat = _this.isRepeat;
      model.state.config.isLoopList = _this.isLoopList;
      model.persisLoopList();
      model.persisLoopSong();
    });
    // audioEl.addEventListener('loadedmetadata', () => {
    audioEl.addEventListener('ended', () => {
      if (_this.isRepeat === true) {
        _this.repeatSong();
      } else if (_this.isRandom === true) {
        _this.randomSong();
      } else if (_this.isLoopList === true) {
        _this.nextSong();
      } else {
        _this.autoPlayAList();
      }
    });
    // });
    // ///////////// HANDLER GLOABAL song options///////////////////////
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
  },
  loadCurrentSong() {
    let key = model.state.sidePlaylist.songs[this.currentIndex].key;
    controlSong(key);
    this.addHandlerActiveSong();
  },
};

const controlSidePlaylist = function (playFirstSong) {
  playlistSideView.render(model.state.sidePlaylist);

  // 3 handler playlist
  // playlistSideView.addHandlerPlayFirstSong(controlSong);
  if (playFirstSong) playlistSideView.addHandlerPlayFirstSong(controlSong);

  lyricView.addHandlerClickShowLyric(controlLyric, '.song-list-item-leftside');
  controlPlayView.addHandlerDownloadSong(
    controlDownSong,
    '.song-list-item-leftside'
  );

  loveSongView.addHandlerAddLoveSong(
    model.addToLoveSong,
    '.song-list-item-leftside'
  );
  controlPlayList.resetConfig();
  controlPlayList.clickToSong('song-playlist-item', 'side-play');
};

const controlPlaylist = async function (
  playlistKey,
  item,
  playFirstSong = true
) {
  try {
    // 1 Load playlist
    await model.loadPlaylist(playlistKey);
    if (item)
      controlPlayView.controlModal(model.state.sidePlaylist.lengthSongs, item);
    // addHandlerActiveSpotItem(model.state.sidePlaylist.lengthSongs);
    if (!model.state.sidePlaylist.lengthSongs) return;
    controlSidePlaylist(playFirstSong);
  } catch (err) {
    throw err;
  }
};
// /////////////////////CONTROL SEARCH //////////////////////
const controlSearchResult = async function (keyword) {
  try {
    // let keyword = searchView.getQuery();
    // if (!keyword) return;
    let isPlank = await model.loadSearchKeyword(keyword);
    if (isPlank) return;
    // handler show result
    searchView.addHandlerShowResult();
    recommendView.renderClearFirst(model.state.searchData.recommend);
    resultSongView.renderClearFirst(model.state.searchData.song);
    resultPlaylistView.renderClearFirst(model.state.searchData.playlist);

    // add handler for song and playlist
    controlPlayView.addHanderClickPlayevent(controlPlaylist);
    controlPlayList.clickToSong('recommend-song', 'main');
    controlPlayList.clickToSong('song-item-content', 'main');
    lyricView.addHandlerClickShowLyric(controlLyric, '.song-list-item-home');
    controlPlayView.addHandlerDownloadSong(
      controlDownSong,
      '.song-list-item-home'
    );
    loveSongView.addHandlerAddLoveSong(
      model.addToLoveSong,
      '.song-list-item-home'
    );

    // add to history search
    model.addToHistorySearch(keyword);
  } catch (err) {
    throw err;
  }
};
//control the initial render when click to tab view
const controlSearchTab = async function () {
  try {
    await model.loadTopKeyword();
    topKeywordView.render(model.state.topKeyWord);
    historySearchView.render(model.state.clouds.searchHistory);
    searchView.addHandlerClickToTopSearch(controlSearchResult);
    historySearchView.addHanlerRemoveOneHistory(model.removeOneHistorySearch);
    historySearchView.addHanlerRemoveAllHistory(model.removeAllHistorySearch);
  } catch (err) {
    throw err;
  }
};
const controlDownSong = async function (key) {
  try {
    const streamUrl = await model.getLinkSong(key);
    if (!streamUrl) {
      toastMessageView.displayToast('Bài hát hiện chưa có sẵn để tải về');
      return;
    }
    window.open(streamUrl);
  } catch (err) {
    throw err;
  }
};
const initSearch = () => {
  controlSearchTab();
  searchView.initShowFirst();
  searchView.addHandlerSearch(controlSearchResult);
};
const initHome = () => {
  controlHome();
};
const initGlobal = function () {
  controlPlayList.initConfig();
  controlPlayList.handleEvents();
  controlPlayView.addHanderClickModal();
  lyricView.addHanderClickLyricModal();
  controlPlayView.addHandlerShowPlayList();
};
// initGlobal();
// initHome();

const initLoveSong = async function () {
  loveSongListView.render(model.state.loveSongs);
  controlPlayList.clickToSong('song-item-content', 'main');
  lyricView.addHandlerClickShowLyric(controlLyric, '.love-song-list-item');
  controlPlayView.addHandlerDownloadSong(
    controlDownSong,
    '.love-song-list-item'
  );
  loveSongListView.addHandlerplayAllList(
    model.state.sidePlaylist,
    model.state.loveSongs,
    controlSidePlaylist
  );
  loveSongListView.addHandlerDeleteSong(model.removeLoveSong);
};
const controlNav = function () {
  navView.addHandlerNavigation(initHome, initSearch, initLoveSong);
};
initHome();
controlNav();
initGlobal();
console.log('wellcome to nhaccuatui made by mynguyen');
