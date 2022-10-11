import View from '../view.js';

class historySearchView extends View {
  _parentElement = document.querySelector('.history-searching');
  addHanlerRemoveOneHistory(handler) {
    const removeIcons = document.querySelectorAll('.trash-icon');
    removeIcons.forEach(icon => {
      icon.addEventListener('click', e => {
        let historyItem = e.target.closest('.searching-history-item');
        let index = historyItem.dataset.order;
        historyItem.remove();
        handler(index);
      });
    });
  }
  addHanlerRemoveAllHistory(handler) {
    const deleteAll = document.querySelector('.delete-all-history');
    deleteAll.addEventListener('click', e => {
      let listItem = e.target
        .closest('.history-searching')
        .querySelector('.searching-history-list');
      listItem.remove();
      handler();
      deleteAll.classList.remove('active-history');
      deleteAll.textContent = 'Chưa có lịch sử tìm kiếm';
    });
  }
  generateMarkup() {
    return `
    ${
      this._data.length > 0
        ? '<p class="delete-all-history active-history">Xóa tất cả</p>'
        : '<p class="delete-all-history ">Chưa có lịch sử tìm kiếm</p>'
    }
            <h2 class="history-search-header header-second">
              Lịch Sử Tìm Kiếm
            </h2>
            <ul class="searching-history-list">
            ${this._data
              .map((keyword, i) => {
                return `
                  <li class="searching-history-item searching-keyword" data-order="${i}" id="${keyword}">
                  <p>${keyword}</p>
                  <div class="trash-icon">
                    <i class="fa-solid fa-trash-can"></i>
                  </div>
                </li>
                  `;
              })
              .join('')}
            </ul>
    `;
  }
}

export default new historySearchView();
