import View from '../view.js';

class resultPlaylistView extends View {
  _parentElement = document.querySelector('.search-video');

  generateMarkup() {
    return `
    <h2 class="header-second search-video-header">Playlist</h2>
            <div class="search-video-container">
                ${this._data
                  .map(playlist => {
                    return `
                    <div class="spot-item video-search-item">
                <div
                  class="spot-item-container item-container-play video-search-item-container" id=${
                    playlist.key
                  }
                >
                  <button class="home-play-btn">
                    <i class="fa-solid fa-circle-play"></i>
                  </button>

                  <div class="spot-img-play">
                    <img
                      src="${
                        playlist.thumbnail
                          ? playlist.thumbnail
                          : 'https://stc-id.nixcdn.com/v12/static/media/default_song_no_cover.a876da66.png'
                      }"
                      alt=""
                    />
                  </div>
                  <button class="spot-item-onplay-btn">
                  <i class="fa-solid fa-headphones"></i>
                </button>
                </div>
                <h3 class="header-third">${playlist.title}</h3>
                <div class="singer-name playlist-search-singer">
                ${playlist.artists
                  .map((artist, i) => {
                    return i + 1 === playlist.artists.length
                      ? `<span class="common-link"> ${artist.name}</span>`
                      : `<span class="common-link"> ${artist.name},</span>`;
                  })
                  .join('')}
                </div>
              </div>
                    `;
                  })
                  .join('')}
            
            </div>
    `;
  }
}
export default new resultPlaylistView();
