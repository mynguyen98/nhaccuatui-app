import View from '../view.js';
let itemActive = 0;
let newSongInterval;
class NewReleaseView extends View {
  _parentElement = document.querySelector('.new-songs-container');

  activeSong(songContent) {
    songContent.forEach(songContent => {
      songContent.classList.remove('active');
    });
    songContent[itemActive].classList.add('active');
    // newSongItems.forEach(newSongItem => {
    //     newSongItem.classList.remove('active');
    //   });
    // newSongItems[itemActive].classList.add('active');
  }
  addHandlerActiveContent() {
    const newSongItems = document.querySelectorAll('.new-song-item');
    const songContent = document.querySelectorAll('.new-song-content-item');
    const songPointEl = document.querySelector('.new-songs-list--point');
    let songItemWidth = newSongItems[0].clientWidth;
    //auto active content after each 3s
    clearInterval(newSongInterval);
    this.autoActiveContent(songContent, newSongItems);
    newSongItems.forEach(newSongItem => {
      newSongItem.addEventListener('mouseover', () => {
        itemActive = newSongItem.dataset.newsong;
        this.activeSong(songContent);
        this.activeSong(newSongItems);
        songPointEl.style.transform = `translateX(${
          songItemWidth * itemActive
        }px)`;
      });
    });
  }

  autoActiveContent(songContent, newSongItems) {
    const songPointEl = document.querySelector('.new-songs-list--point');
    let songItemWidth = newSongItems[0].clientWidth;
    // console.log(itemActive);
    if (newSongInterval) clearInterval(newSongInterval);
    newSongInterval = setInterval(() => {
      this.activeSong(songContent);
      this.activeSong(newSongItems);
      songPointEl.style.transform = `translateX(${
        songItemWidth * itemActive
      }px)`;
      itemActive++;
      if (itemActive > songContent.length - 1) itemActive = 0;
    }, 3000);
  }
  generateMarkup() {
    console.log(this._data);
    return `
    <div class="new-song-content">
    ${this._data
      .map((song, index) => {
        return `
        <div class="new-song-content-item " data-newsong=${index}>
        <div class="new-song-content-item--wrapper">
          <div class="new-song-img">
            <img
              src="${song.thumbnail}"
              alt=""
            />
          </div>
          <div class="new-song-description">
            <a href="#" class="new-song-name header-third"
              >${song.title}</a>
            <div class="new-song-singer">
              <div class="singer-avatar-container">
                ${song.artists
                  .map(artist => {
                    return `                    
              
                        <img 
                        src="${
                          artist.imageUrl
                            ? artist.imageUrl
                            : 'https://kenhtao.net/wp-content/uploads/2018/04/hack-vip-nhaccuatui-ios.jpg'
                        }"
                        alt=""
                        />

                    `;
                  })
                  .join('')}
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
            <div class="song-date-release">
              <i class="fa-solid fa-calendar-days"></i>
              <span> Ngày phát hành: ${new Date(
                song.dateCreate
              ).toLocaleDateString()}</span>
            </div>
          </div>
          </div>
          
          </div>
          `;
      })
      .join('')}
  </div>
  <div class="new-songs-list">
    <div class="new-songs-list--point"></div>
    ${this._data
      .map(
        (song, index) => `
        <div class="new-song-item song-list-item--data" data-newsong="${index}" id="${song.key}">
            <button class="button-play-album button-play-song">
                <i class="fa-solid fa-circle-play"></i>
            </button>
            <img
                src="${song.thumbnail}"
                alt=""
            />
        </div>
    
    `
      )
      .join('')}
  </div>

    `;
  }
}

export default new NewReleaseView();
