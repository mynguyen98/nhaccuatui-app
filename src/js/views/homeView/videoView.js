import View from '../view.js';

class VideoView extends View {
  _parentElement = document.querySelector('.video-list');

  generateMarkup() {
    return `
        ${this._data
          .map(video => {
            return `
                <div class="video-item">
            <div class="item-container-play">
                <div class="video-duration">${video.duration}</div>
                <button class="home-play-btn">
                <i class="fa-solid fa-circle-play"></i>
                </button>

                <div class="spot-img-play">
                <img
                    src="${video.thumbnail}"
                    alt=""
                />
                </div>
            </div>
            <div class="video-content">
                <a href="#" class="link-subject">
                ${video.title}
                </a>
                <p class="video-singer">
                ${video.artists
                  .map((artist, i) => {
                    return i + 1 === video.artists.length
                      ? `<span class="common-link"> ${artist.name}</span>`
                      : `<span class="common-link"> ${artist.name},</span>`;
                  })
                  .join('')}
                </p>
            </div>
            </div>
                
            `;
          })
          .join('')}
    `;
  }
}

export default new VideoView();
