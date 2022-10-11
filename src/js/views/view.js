export default class View {
  _data;
  render(data) {
    this._data = data; // copy to work with it more in other function
    if (!this._data) return;
    // console.log(this._data);
    const markup = this.generateMarkup();
    // console.log(markup);
    this.clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderClearFirst(data) {
    this._data = data; // copy to work with it more in other function
    this.clear();
    if (!this._data) return;
    // console.log(this._data);
    const markup = this.generateMarkup();
    // console.log(markup);
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  clear() {
    this._parentElement.innerHTML = '';
  }
}
