// import nhaccuatui from 'nhaccuatui-api-full';
import {
  getHome,
  getSong,
  getLyric,
  searchByKeyword,
  getTopKeyword,
  getPlaylists,
  getPlaylistDetail,
  getTrendingArtists,
  getTopics,
  getTopicDetail,
} from './nhaccuatui-api-full-fixed/index.js';
import toastMessageView from './views/toastMessageView.js';

export const state = {
  home: {},
  searchData: {},
  song: {},
  lyric: '',
  sidePlaylist: {},
  topKeyWord: [],
  loveSongs: [],
  clouds: {
    currentSong: {},
    loveSongKey: [],
    loveSong: [],
    playHistory: {},
    searchHistory: [],
  }, //
  songPlay: [],
  config: {
    isRepeat: false,
    isLoopList: false,
    isRandom: false,
    isFirstTime: true,
  },
};

const persisCurrentSong = () => {
  localStorage.setItem(
    'currentSong',
    JSON.stringify(state.config.currentSongKey)
  );
};
const persisCurrentPlaylist = () => {
  localStorage.setItem(
    'currentPlaylist',
    JSON.stringify(state.config.currentPlaylistKey)
  );
};

export const persisLoopSong = () => {
  localStorage.setItem('isRepeat', JSON.stringify(state.config.isRepeat));
};
export const persisLoopList = () => {
  localStorage.setItem('isLoopList', JSON.stringify(state.config.isLoopList));
};

export const persisRandom = () => {
  localStorage.setItem('isRandom', JSON.stringify(state.config.isRandom));
};
export const persisIsFirstTime = () => {
  localStorage.setItem('isFirstTime', JSON.stringify(state.config.isFirstTime));
};
const initConfig = () => {
  let initRepeat = localStorage.getItem('isRepeat');
  if (initRepeat) state.config.isRepeat = JSON.parse(initRepeat);
  let initLoopList = localStorage.getItem('isLoopList');
  if (initLoopList) state.config.isLoopList = JSON.parse(initLoopList);
  let initRandom = localStorage.getItem('isRandom');
  if (initRandom) state.config.isRandom = JSON.parse(initRandom);

  let initFirstTime = localStorage.getItem('isFirstTime');
  if (initFirstTime) state.config.isFirstTime = JSON.parse(initFirstTime);

  let initCurrentSong = localStorage.getItem('currentSong');
  if (initCurrentSong)
    state.config.currentSongKey = JSON.parse(initCurrentSong);
  let initCurrentPlaylist = localStorage.getItem('currentPlaylist');
  if (initCurrentPlaylist)
    state.config.currentPlaylistKey = JSON.parse(initCurrentPlaylist);
};
initConfig();

const createSongObject = function (song) {
  return {
    artists: song.artists,
    duration: song.duration,
    // isMyPlayList: song.isMyPlaylist,
    key: song.key,
    streamUrl:
      song.streamUrls.length > 0 ? song.streamUrls[0].streamUrl : undefined,
    thumbnail: song.thumbnail
      ? song.thumbnail
      : 'https://stc-id.nixcdn.com/v12/static/media/nowplaying_default.f54ac018.png',
    title: song.title,
  };
};
const createPlaylistSongObj = function (song) {
  return {
    artists: song.artists,
    // isMyPlayList: song.isMyPlaylist,
    key: song.key,
    title: song.title,
    thumbnail: song.thumbnail,
  };
};

const waitData = async (getData, key) => {
  try {
    let isOk = 'error';
    let data;
    while (isOk === 'error') {
      data = await getData(key);
      isOk = data.status;
    }
    return data;
  } catch (err) {
    throw err;
  }
};

//`${data.playlist? data.playlist:''}`
export const loadSong = async function (id) {
  try {
    const songData = await waitData(getSong, id);
    if (songData.status === 'error')
      throw new Error(`${songData.error.message}`);
    let { song } = songData;
    state.song = createSongObject(song);
    state.config.currentSongKey = id;
    persisCurrentSong();
  } catch (err) {
    throw err;
  }
};

export const loadLyric = async function (id) {
  try {
    const lyricData = await waitData(getLyric, id);
    if (lyricData.status === 'error') {
      throw new Error(`${lyricData.error.message}`);
    }

    let { lyric } = lyricData;

    if (lyric.lyric === '') {
      state.lyric = 'Lời bài hát chưa được cập nhật';
    } else {
      state.lyric = lyric.lyric;
    }
  } catch (err) {
    throw err;
  }
};
export const getLinkSong = async function (id) {
  try {
    const song = await waitData(getSong, id);
    if (song.status === 'error') {
      throw new Error(`${song.error.message}`);
    }
    return song.song.streamUrls.length > 0
      ? song.song.streamUrls[0].streamUrl
      : undefined;
  } catch (err) {
    throw err;
  }
};
export const loadHome = async function () {
  try {
    // let homeData;
    // let isOk = 'error';
    // while (isOk === 'error') {
    //   homeData = await getHome();
    //   isOk = homeData.status;
    // }
    homeData = await waitData(getHome);
    if (homeData.status === 'error') throw new Error(homeData.error.message);

    state.home = homeData;
  } catch (err) {
    throw err;
  }
};

export const loadHomeSong = async function (songs) {
  const songsPlay = await Promise.all(
    songs.map(async song => {
      const songPlay = await waitData(getSong, song.key);
      return songPlay.song;
    })
  );
  state.home.songsHome = songsPlay;
};
const getRankingData = data => {
  let dataFilled = {
    key: data.playlist.key,
    songs: [],
  };
  data.playlist.songs;
  for (let i = 0; i < 3; i++) {
    dataFilled.songs.push(createPlaylistSongObj(data.playlist.songs[i]));
  }
  return dataFilled;
};

export const loadRankingList = async function () {
  try {
    const vnRank = await waitData(getPlaylistDetail, 'taNakaGUJ7k9');
    const koreanRank = await waitData(getPlaylistDetail, 'aUBTYVhm6Aqf');
    const usRank = await waitData(getPlaylistDetail, 'S5neMcFsBED5');

    const vn = getRankingData(vnRank);
    const korean = getRankingData(koreanRank);
    const us = getRankingData(usRank);
    vn.title = 'Viet Nam';
    korean.title = 'Korean';
    us.title = 'US-UK';
    state.home.rankingList = [vn, us, korean];
  } catch (err) {}
};

// const returnAllSong = async function (songs) {
//   Promise.all(
//     songs.map(async song => {
//       const songPlay = await getSong(song.key);
//       return songPlay;
//     })
//   );
// };

export const loadPlaylist = async function (key) {
  try {
    const playlistData = await waitData(getPlaylistDetail, key);
    if (playlistData.status === 'error')
      throw new Error(playlistData.error.message);
    let playlist = playlistData.playlist;

    // get each song from playlist
    const songsPlay = await Promise.all(
      playlist.songs.map(async song => {
        const songPlay = await waitData(getSong, song.key);
        return songPlay;
      })
    );
    // format the infor of song that needed
    const songs = songsPlay
      .map(songData => {
        if (songData.song.streamUrls[0]?.streamUrl) {
          return createPlaylistSongObj(songData.song);
        }
        return;
      })
      .filter(song => song != undefined);
    state.sidePlaylist = {
      title: playlist.title,
      key: playlist.key,
      thumbnail: playlist.thumbnail,
      songs: songs,
      lengthSongs: songs.length,
    };
    // const playListDetail = await getTopics();
    state.config.currentPlaylistKey = key;
    persisCurrentPlaylist();
  } catch (err) {
    throw err;
  }
};
const CreateRecommendSearch = function (data) {
  return {
    artist: data.artists.map(artist => artist.name),
    key: data.key,
    duration: data.duration,
    thumbnail: data.thumbnail,
    title: data.title,
    type: data.type,
  };
};
export const isEmpty = function (obj) {
  return Object.keys(obj).length === 0;
};
export const loadSearchKeyword = async function (key) {
  try {
    const data = await waitData(searchByKeyword, key);
    /////////////////CLEAR OLD SEARCH RESULT //////////////////////////////////
    state.searchData = {};
    let playlistSearch = data.search.playlist.playlist;
    let songlistSearch = data.search.song.song;
    let recommendSearch = data.recommend;
    if (
      Object.keys(recommendSearch).length === 0 &&
      playlistSearch.length === 0 &&
      songlistSearch.length === 0
    ) {
      toastMessageView.displayToast(
        'Nội dung tìm kiếm không có, vui lòng kiểm tra lại cú pháp'
      );
      return true;
    }

    if (Object.keys(data.recommend).length !== 0) {
      // let recommend =
      //   data.recommend[Object.keys(data.recommend)[0]].length !== 0
      //     ? data.recommend[Object.keys(data.recommend)[0]][0]
      //     : data.recommend[Object.keys(data.recommend)[1]][0];
      //   state.searchData.recommend = CreateRecommendSearch(recommend);
      let recommend;
      let recommend1 = data.recommend[Object.keys(data.recommend)[0]];
      let recommend2 = data.recommend[Object.keys(data.recommend)[0]];
      if (recommend1.length !== 0) {
        recommend = CreateRecommendSearch(recommend1[0]);
      } else if (recommend2.length !== 0) {
        recommend = CreateRecommendSearch(recommend2[0]);
      } else {
        recommend = undefined;
      }
      state.searchData.recommend = recommend;
    } else {
      state.searchData.recommend = undefined;
    }
    state.searchData.playlist =
      playlistSearch.length !== 0
        ? playlistSearch.map(playlist => createPlaylistSongObj(playlist))
        : undefined;

    state.searchData.song =
      songlistSearch !== 0
        ? songlistSearch.map(song => createSongObject(song))
        : undefined;
  } catch (err) {
    throw err;
  }
};

export const loadTopKeyword = async function () {
  try {
    const kwData = await waitData(getTopKeyword);
    keywords = kwData.listKeyValue.map(data => {
      return data.title;
    });
    state.topKeyWord = keywords;
  } catch (err) {
    throw err;
  }
};
const init = function () {
  const historySearch = localStorage.getItem('historySearch');
  if (historySearch) state.clouds.searchHistory = JSON.parse(historySearch);
};
init();
const updateToLocalHistorySearch = () => {
  localStorage.setItem(
    'historySearch',
    JSON.stringify(state.clouds.searchHistory)
  );
};

export const addToHistorySearch = function (keyword) {
  state.clouds.searchHistory.includes(keyword)
    ? state.clouds.searchHistory
    : state.clouds.searchHistory.push(keyword);
  updateToLocalHistorySearch();
};

export const removeOneHistorySearch = function (index) {
  state.clouds.searchHistory.splice(index, 1);
  updateToLocalHistorySearch();
};
export const removeAllHistorySearch = function () {
  state.clouds.searchHistory = [];
  updateToLocalHistorySearch();
};

//////////////// ADD to love song //////////////////

const updateToLocalLoveSong = () => {
  localStorage.setItem('loveSongKey', JSON.stringify(state.clouds.loveSongKey));
};

export const addToLoveSong = async function (key) {
  try {
    if (state.clouds.loveSongKey.includes(key)) {
      toastMessageView.render('Đã tồn tại bài hát này danh sách yêu thích');
      return;
    }
    state.clouds.loveSongKey.push(key);
    let loveSong = await waitData(getSong, key);
    updateToLocalLoveSong();
    state.loveSongs.push(createSongObject(loveSong.song));
    toastMessageView.render('Bạn đã thêm bài hát vào danh sách yêu thích');
  } catch (err) {
    throw err;
  }
};

export const removeLoveSong = function (order) {
  state.clouds.loveSongKey.splice(order, 1);
  state.loveSongs.splice(order, 1);
  updateToLocalLoveSong();
};

const loadLoveSong = async function () {
  try {
    state.loveSongs = await Promise.all(
      state.clouds.loveSongKey.map(async key => {
        const loveSong = await waitData(getSong, key);
        return createSongObject(loveSong.song);
      })
    );
  } catch (err) {
    throw err;
  }
};
export const initLoveSong = async function () {
  const loveSongKey = localStorage.getItem('loveSongKey');
  if (loveSongKey) state.clouds.loveSongKey = JSON.parse(loveSongKey);
  // load all love song at the beginning through key array
  await loadLoveSong();
};
initLoveSong();
// initLoveSong();
// const addToLocalWaiting = () => {
//   localStorage.setItem(
//     'waitingSongs',
//     JSON.stringify(state.clouds.waitingSongs)
//   );
// };

// export const addToWaitings = async function (songId) {
//   try {
//     // add to songclouds
//     if (state.clouds.waitingSongs.includes(songId)) {
//       alert('this song already exists in waitinglist');
//       return;
//     }
//     //check song exist in wait yet
//     state.clouds.waitingSongs.push(songId);

//     // push to wait song
//     const songAddWaitData = await getSong(songId);
//     console.log(songAddWaitData.song);
//     const songAddWait = createPlaylistSongObj(songAddWaitData.song);
//     state.waitingSongs.unshift(songAddWait);
//     // add to Localstorage
//     alert('Bạn đã thêm bài hát vào danh sách chờ');
//     return songAddWait;
//   } catch (e) {
//     throw e;
//   }
// };
