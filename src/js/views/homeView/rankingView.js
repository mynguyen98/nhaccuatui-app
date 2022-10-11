import View from '../view.js';

class RankingView extends View {
  _parentElement = document.querySelector('.ranking-containter');

  handlerMouseOverEvent() {
    const rankingImgs = document.querySelectorAll('.ranking-img-item');
    rankingImgs.forEach(rankingImg => {
      rankingImg.addEventListener('mouseover', e => {
        let order = rankingImg.dataset.order;
        let songItems = e.target
          .closest('.ranking-item')
          .querySelectorAll('.ranking-song-content-item');
        songItems.forEach(songItem => {
          songItem.classList.remove('active');
        });
        songItems[order].classList.add('active');
        e.target
          .closest('.ranking-item')
          .querySelector('.ranking-position').textContent = `#${+order + 1}`;
      });
    });
  }
  generateMarkup() {
    return `
    ${this._data
      .map(playlist => {
        return `
        <div class="ranking-item" id="${playlist.key}">
        <div class="ranking-img-list">
        ${playlist.songs
          .map((song, i) => {
            return `
                <div class="ranking-img-item" data-order="${i}">
                <img
                    src="${song.thumbnail}"
                    alt=""
                    class=""
                />
                </div>                    
            `;
          })
          .join('')}
        </div>
        <div class="ranking-background ranking-bg-item-1">
          <p class="ranking-name">${playlist.title}</p>
        </div>
        <div class="ranking-song-content">
            ${playlist.songs
              .map((song, i) => {
                return `
                <div class="ranking-song-content-item ${
                  i === 0 ? 'active' : ''
                }" data-order="${i}">
                  <h3 class="ranking-song-name">${song.title}</h3>
                  <div class="ranking-song-singer">
                  ${song.artists
                    .map((artist, i) => {
                      return i + 1 === song.artists.length
                        ? `<span class="common-link"> ${artist.name}</span>`
                        : `<span class="common-link"> ${artist.name},</span>`;
                    })
                    .join('')}
                  </div>           
                </div>                
                `;
              })
              .join('')}

          <div class="home-play-btn play-rank-btn">
          <i class="fa-solid fa-circle-play"></i>
          </div>
          <p class="ranking-position ">#1</p>
        </div>
      </div>
            
        `;
      })
      .join('')}
    `;
  }
}

export default new RankingView();
