const searchingContainerEl = document.querySelector('.searching-container');
const searchingResultEl = document.querySelector('.searching-results');
const searchIcon = document.querySelector('.icon-searching');
class SearchView {
  _parentEl = document.querySelector('.input-search');

  getQuery() {
    const query = this._parentEl.querySelector('.search-field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search-field').value = '';
  }
  searchQuery(e, handler) {
    e.preventDefault();
    console.log(searchingContainerEl);
    let keyword = this.getQuery();
    console.log(keyword);
    if (!keyword) return;
    handler(keyword);
  }
  addHandlerShowResult() {
    searchingContainerEl.classList.add('hidden');
    searchingResultEl.classList.remove('hidden');
  }
  initShowFirst() {
    searchingContainerEl.classList.remove('hidden');
    searchingResultEl.classList.add('hidden');
  }
  addHandlerSearch(handler) {
    let _this = this;
    this._parentEl.addEventListener('submit', function (e) {
      _this.searchQuery(e, handler);
    });
    searchIcon.addEventListener('click', function (e) {
      _this.searchQuery(e, handler);
    });
  }
  addHandlerClickToTopSearch(handler) {
    const searchingTopItem = document.querySelectorAll('.searching-keyword');
    searchingTopItem.forEach(item => {
      item.addEventListener('click', () => {
        let keyword = item.id;
        handler(keyword);
        searchingContainerEl.classList.add('hidden');
        searchingResultEl.classList.remove('hidden');
      });
    });
  }
}

export default new SearchView();
