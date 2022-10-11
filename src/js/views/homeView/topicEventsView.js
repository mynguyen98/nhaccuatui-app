import View from '../view.js';

class TopicEventsView extends View {
  _parentElement = document.querySelector('.topic-event');

  generateMarkup() {
    return `
      ${this._data.topicEvent
        .map(
          (topic, i) => `
    <div class="home-event-${i} home-item">
      <h2 class="topic-description header-second">
      ${topic.groupName.split('_')[0]}
      </h2>
      <div class="control-slick">
        <div class="control-left">
          <i class="fa-solid fa-angle-left"></i>
        </div>
        <div class="control-right">
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
      
      <div class="spot-gallery slick-list">
        ${topic.listPlaylist
          .map(
            playlist => `
            <div class="spot-item slick-item">
                <div class="spot-item-container item-container-play" id="${playlist.key}">
                  <button class="home-play-btn">
                    <i class="fa-solid fa-circle-play"></i>
                  </button>

                  <div class="spot-img-play">
                    <img
                      src="${playlist.thumbnail}"
                      alt=""
                    />
                  </div>
                  <button class="spot-item-onplay-btn">
                  <i class="fa-solid fa-headphones"></i>
                </button>
                </div>
                <h3 class="header-third">${playlist.title}</h3>
              </div>
        `
          )
          .join('\n')}
      </div>
    </div>
      `
        )
        .join('\n')}
    `;
  }
}

export default new TopicEventsView();
