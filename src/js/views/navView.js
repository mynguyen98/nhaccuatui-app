const searchingMain = document.querySelector('.search-main');
const homeMain = document.querySelector('.home-main');
const loveMain = document.querySelector('.love-main');
const navBar = document.querySelectorAll('.main-nav-item');
const mainContents = document.querySelectorAll('.main-content');
class navView {
  // _parentEl = document.querySelector('.input-search');
  addHandlerNavigation(handlerHome, handlerSearch, handlerLove) {
    navBar.forEach(nav => {
      nav.addEventListener('click', () => {
        if (!nav.id) return;
        navBar.forEach(navItem => {
          navItem.classList.remove('active-nav');
        });
        nav.classList.add('active-nav');
        if (nav.id === 'home-nav') {
          this.controlActiveMain(homeMain);
          handlerHome();
        }
        if (nav.id === 'search-nav') {
          this.controlActiveMain(searchingMain);
          handlerSearch();
        }
        if (nav.id === 'love-nav') {
          this.controlActiveMain(loveMain);
          handlerLove();
        }
      });
    });
  }
  controlActiveMain(activeEl) {
    mainContents.forEach(main => {
      main.classList.remove('main-content--active');
    });
    activeEl.classList.add('main-content--active');
  }
}

export default new navView();
