let slideId;
export function controlSlide() {
  const slideContainer = document.querySelector('.main-container');
  const slider = document.querySelector('.slider');
  const dotContainer = document.querySelector('.container-dot');
  const nextBtn = document.querySelector('.slide-next');
  const prevBtn = document.querySelector('.slide-prev');
  let slides = document.querySelectorAll('.slider-top');

  let index = 1;
  let interval = 2000;
  // let slideId;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.id = 'first-clone';
  lastClone.id = 'last-clone';

  slider.append(firstClone);
  slider.prepend(lastClone);

  //////////// function to generate and active DOT at slide /////////////////////
  const createDot = function () {
    dotContainer.innerHTML = '';
    slides.forEach((slide, i) => {
      slide.dataset.slide = i;
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activeDotImg = function (slideNum) {
    if (slideNum === slides.length + 1) slideNum = 1;
    if (slideNum === 0) slideNum = slides.length;
    /////////////  remove active from dot and slide /////////
    document.querySelectorAll('.dots__dot').forEach(dot => {
      dot.classList.remove('active-dot');
    });
    document.querySelectorAll('.slider-top').forEach(slide => {
      slide.classList.remove('slide-active');
    });
    /////////////  add active to current dot and slide /////////

    document
      .querySelector(`.dots__dot[data-slide = "${slideNum - 1}"]`)
      .classList.add('active-dot');
    document
      .querySelector(`.slider-top[data-slide = "${slideNum - 1}"]`)
      .classList.add('slide-active');
  };

  let slideWidth = slides[index].clientWidth;
  slider.style.transform = `translateX(${-slideWidth * index}px)`;

  /////////// move to next or prev slide ////////////////////
  getSlides = function () {
    return document.querySelectorAll('.slider-top');
  };
  const moveToNextSlide = i => {
    let slides = getSlides();
    if (index >= slides.length - 1) return; // guard for javascript timing. when click too fast and index not update yet
    //   index = i === undefined ? index++ : i+1
    if (i === undefined) {
      index++;
    } else {
      index = i + 1;
    }
    let slideWidth = slides[index].clientWidth;
    slider.style.transition = '0.7s';
    slider.style.transform = `translateX(${-slideWidth * index}px)`;
    activeDotImg(index);
  };
  const moveToPrevSlide = () => {
    if (index <= 0) return;
    index--;
    slider.style.transition = '.7s';
    slider.style.transform = `translateX(${-slideWidth * index}px)`;
    activeDotImg(index);
  };
  const startSlide = () => {
    if (slideId) clearInterval(slideId);
    slideId = setInterval(() => {
      moveToNextSlide();
    }, interval);
  };
  /////////// listen event ////////////////
  slider.addEventListener('transitionend', () => {
    let slides = getSlides();
    if (slides[index].id === firstClone.id) {
      index = 1;
    }
    if (slides[index].id === lastClone.id) {
      index = slides.length - 2;
    }
    let slideWidth = slides[index].clientWidth;
    slider.style.transition = 'none';
    slider.style.transform = `translateX(${-slideWidth * index}px)`;
  });
  nextBtn.addEventListener('click', () => {
    moveToNextSlide();
  });
  prevBtn.addEventListener('click', moveToPrevSlide);
  slideContainer.addEventListener('mouseover', () => {
    clearInterval(slideId);
  });
  slideContainer.addEventListener('mouseleave', startSlide);
  dotContainer.addEventListener('click', e => {
    if (e.target.classList.contains('dots__dot')) {
      const slideNum = e.target.dataset.slide;
      moveToNextSlide(+slideNum);
    }
  });
  ///////////////// init slide ///////////////////
  createDot();
  startSlide();
}

///////////////// Slick slide product ///////////////////

function controlSlick(parent) {
  const slickItems = parent.querySelectorAll('.slick-item');
  const slickList = parent.querySelector('.slick-list');
  const controlLeft = parent.querySelector('.control-left');
  const controlRight = parent.querySelector('.control-right');
  let numSlideShow = 4;
  let currentSlide = 0;
  let numItems = slickItems.length;
  let lastSlide =
    numSlideShow * (Math.floor(numItems / numSlideShow) - 1) +
    (numItems % numSlideShow);

  // console.log(calcLastSlide());
  const slickAddDataset = () => {
    // slickItems[0].classList.add('current-slide');
    slickItems.forEach((slickItem, i) => {
      slickItem.dataset.slickNum = i;
    });
  };

  slickAddDataset();
  // display slide at the beginning
  const displaySlide = numslideShow => {
    for (let j = 0; j < numslideShow; j++) {
      // console.log(slickItems);
      slickItems[j].classList.add('slick-active');
    }
  };

  const controlActiveSlide = (fromSlide, toSlide) => {
    slickItems.forEach((slickItem, i) => {
      if (i < fromSlide || i > toSlide) {
        slickItem.classList.remove('slick-active');
      }
      if (i >= fromSlide && i <= toSlide) {
        slickItem.classList.add('slick-active');
      }
    });
  };
  displaySlide(numSlideShow);

  const activeControlSlide = () => {
    if (currentSlide === 0) {
      controlRight.classList.add('control-active');
      controlLeft.classList.remove('control-active');
    }
    if (currentSlide > 0 && currentSlide < lastSlide) {
      controlRight.classList.add('control-active');
      controlLeft.classList.add('control-active');
    }
    if (currentSlide === lastSlide) {
      controlRight.classList.remove('control-active');
      controlLeft.classList.add('control-active');
    }
  };
  activeControlSlide();

  const transateSlide = numSlideTranslate => {
    let widthItem = slickItems[0].clientWidth;
    slickList.style.transition = '.7s';

    slickList.style.transform = `translateX(${
      -widthItem * numSlideTranslate
    }px)`;
  };

  ///////////// THE WAY 1 ////////////////////////
  const controlRightSlide = () => {
    let remainItems = numItems - numSlideShow - currentSlide;
    if (remainItems <= numSlideShow) {
      transateSlide(currentSlide + remainItems);
      controlActiveSlide(currentSlide + remainItems, numItems - 1);
      currentSlide = currentSlide + remainItems;
    }
    if (remainItems > numSlideShow) {
      transateSlide(currentSlide + numSlideShow);
      controlActiveSlide(
        currentSlide + numSlideShow,
        (currentSlide + numSlideShow) * 2 - 1
      );
      currentSlide = currentSlide + numSlideShow;
    }
  };
  ///////////// THE WAY 2 ////////////////////////

  const controlLeftSlide = () => {
    const surSlide = currentSlide % numSlideShow;
    if (currentSlide === lastSlide && surSlide > 0 && currentSlide != 0) {
      transateSlide(lastSlide - surSlide);
      controlActiveSlide(currentSlide - surSlide, numItems - surSlide);
      currentSlide = currentSlide - surSlide;
    }
    if (surSlide === 0 && currentSlide != 0) {
      transateSlide(currentSlide - numSlideShow);
      controlActiveSlide(currentSlide - numSlideShow, currentSlide - 1);
      currentSlide = currentSlide - numSlideShow;
    }
  };

  //  ADD EVENT LISTENER
  controlRight.addEventListener('click', () => {
    controlRightSlide();
    activeControlSlide();
  });
  controlLeft.addEventListener('click', () => {
    controlLeftSlide();
    activeControlSlide();
  });
  window.addEventListener('resize', () => {
    transateSlide(0);
    displaySlide(numSlideShow);
  });
}

export function slickSlider() {
  const homeItems = document.querySelectorAll('.home-item');
  homeItems.forEach(homeItem => {
    controlSlick(homeItem);
  });
}

// export const controlSlider = {
//   getSelector() {
//     this.slideContainer = document.querySelector('.main-container');
//     this.slider = document.querySelector('.slider');
//     this.dotContainer = document.querySelector('.container-dot');
//     this.nextBtn = document.querySelector('.slide-next');
//     this.prevBtn = document.querySelector('.slide-prev');
//     this.slides = document.querySelectorAll('.slider-top');
//   },
//   index: 1,
//   interval: 2000,
//   // slideId,
//   // firstClone,
//   // lastClone,
//   cloneSlide() {
//     this.firstClone = this.slides[0].cloneNode(true);
//     this.lastClone = this.slides[this.slides.length - 1].cloneNode(true);
//     this.firstClone.id = 'first-clone';
//     this.lastClone.id = 'last-clone';
//     this.slider.append(this.firstClone);
//     this.slider.prepend(this.lastClone);
//   },

//   createDot() {
//     this.dotContainer.innerHTML = '';
//     this.slides.forEach((slide, i) => {
//       slide.dataset.slide = i;
//       this.dotContainer.insertAdjacentHTML(
//         'beforeend',
//         `<button class="dots__dot" data-slide="${i}"></button>`
//       );
//     });
//   },

//   activeDotImg(slideNum) {
//     if (slideNum === this.slides.length + 1) slideNum = 1;
//     if (slideNum === 0) slideNum = this.slides.length;
//     /////////////  remove active from dot and slide /////////
//     document.querySelectorAll('.dots__dot').forEach(dot => {
//       dot.classList.remove('active-dot');
//     });
//     document.querySelectorAll('.slider-top').forEach(slide => {
//       slide.classList.remove('slide-active');
//     });
//     /////////////  add active to current dot and slide /////////

//     document
//       .querySelector(`.dots__dot[data-slide = "${slideNum - 1}"]`)
//       .classList.add('active-dot');
//     document
//       .querySelector(`.slider-top[data-slide = "${slideNum - 1}"]`)
//       .classList.add('slide-active');
//   },
//   getSlides() {
//     return document.querySelectorAll('.slider-top');
//   },
//   moveToNextSlide(i) {
//     console.log(this.index);
//     let slides = this.getSlides();
//     if (this.index >= slides.length - 1) return; // guard for javascript timing. when click too fast and index not update yet
//     //   index = i === undefined ? index++ : i+1
//     if (i === undefined) {
//       this.index++;
//     } else {
//       this.index = i + 1;
//     }
//     let slideWidth = slides[this.index].clientWidth;
//     this.slider.style.transition = '0.7s';
//     this.slider.style.transform = `translateX(${-slideWidth * this.index}px)`;
//     this.activeDotImg(this.index);
//   },
//   moveToPrevSlide() {
//     if (this.index <= 0) return;
//     this.index--;
//     this.slider.style.transition = '.7s';
//     this.slider.style.transform = `translateX(${-slideWidth * this.index}px)`;
//     this.activeDotImg(this.index);
//   },
//   startSlide() {
//     let _this = this;
//     this.slideId = setInterval(() => {
//       this.moveToNextSlide();
//     }, _this.interval);
//   },

//   handlerSlider() {
//     let _this = this;
//     _this.slider.addEventListener('transitionend', () => {
//       let slides = _this.getSlides();
//       if (slides[_this.index].id === _this.firstClone.id) {
//         _this.index = 1;
//       }
//       if (slides[_this.index].id === _this.lastClone.id) {
//         _this.index = slides.length - 2;
//       }
//       let slideWidth = slides[_this.index].clientWidth;
//       _this.slider.style.transition = 'none';
//       _this.slider.style.transform = `translateX(${
//         -slideWidth * _this.index
//       }px)`;
//     });
//     _this.nextBtn.addEventListener('click', () => {
//       _this.moveToNextSlide();
//       clearInterval(_this.slideId);
//     });
//     _this.prevBtn.addEventListener('click', _this.moveToPrevSlide);
//     _this.slideContainer.addEventListener('mouseover', () => {
//       clearInterval(_this.slideId);
//     });
//     _this.slideContainer.addEventListener('mouseleave', _this.startSlide);
//     _this.dotContainer.addEventListener('click', e => {
//       if (e.target.classList.contains('dots__dot')) {
//         const slideNum = e.target.dataset.slide;
//         _this.moveToNextSlide(+slideNum);
//       }
//     });
//   },
//   initSlider() {
//     this.getSelector();
//     this.createDot();
//     this.cloneSlide();
//     this.startSlide();
//     this.handlerSlider();
//   },
// };
