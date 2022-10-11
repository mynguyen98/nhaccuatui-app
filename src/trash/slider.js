const slideContainer = document.querySelector(".main-container");
const slider = document.querySelector(".slider");
const dotContainer = document.querySelector(".container-dot");
const nextBtn = document.querySelector(".slide-next");
const prevBtn = document.querySelector(".slide-prev");
let slides = document.querySelectorAll(".slider-top");

let index = 1;
let interval = 2000;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

const createDot = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activeDotImg = function (slideNum) {
  if (slideNum === slides.length + 1) slideNum = 1;
  if (slideNum === 0) slideNum = slides.length;
  document.querySelectorAll(".dots__dot").forEach((dot) => {
    dot.classList.remove("active-dot");
  });
  document
    .querySelector(`.dots__dot[data-slide = "${slideNum - 1}"]`)
    .classList.add("active-dot");
};

slider.append(firstClone);
slider.prepend(lastClone);
let slideWidth = slides[index].clientWidth;
slider.style.transform = `translateX(${-slideWidth * index}px)`;

getSlides = function () {
  return document.querySelectorAll(".slider-top");
};
const moveToNextSlide = (i) => {
  let slides = getSlides();
  if (index >= slides.length - 1) return; // guard for javascript timing. when click too fast and index not update yet
  //   index = i === undefined ? index++ : i+1
  if (i === undefined) {
    index++;
  } else {
    index = i + 1;
  }
  let slideWidth = slides[index].clientWidth;
  slider.style.transition = "0.7s";
  slider.style.transform = `translateX(${-slideWidth * index}px)`;
  activeDotImg(index);
};
const moveToPrevSlide = () => {
  if (index <= 0) return;
  index--;
  slider.style.transition = ".7s";
  slider.style.transform = `translateX(${-slideWidth * index}px)`;
  activeDotImg(index);
};
const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

slider.addEventListener("transitionend", () => {
  let slides = getSlides();
  if (slides[index].id === firstClone.id) {
    index = 1;
  }
  if (slides[index].id === lastClone.id) {
    index = slides.length - 2;
  }
  let slideWidth = slides[index].clientWidth;
  slider.style.transition = "none";
  slider.style.transform = `translateX(${-slideWidth * index}px)`;
});
nextBtn.addEventListener("click", () => {
  moveToNextSlide();
});
prevBtn.addEventListener("click", moveToPrevSlide);
slideContainer.addEventListener("mouseover", () => {
  clearInterval(slideId);
});
slideContainer.addEventListener("mouseleave", startSlide);
dotContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dots__dot")) {
    const slideNum = e.target.dataset.slide;
    moveToNextSlide(+slideNum);
  }
});

createDot();
startSlide();

// //////////// SLICK SLIDER SONG LIST /////////////////////////
function slickSlider(parrent) {
  const slickList = parrent.querySelector(".slick-list");
  const slickItems = parrent.querySelectorAll(".slick-item");
  const controlLeft = parrent.querySelector(".control-left");
  const controlRight = parrent.querySelector(".control-right");
  console.log(slickList);

  let numSlideShow = 6;
  // responsiveSlide(responseWidth);
  let currentSlide = 0;
  const numItems = slickItems.length;
  let lastSlide =
    numSlideShow * (Math.floor(numItems / numSlideShow) - 1) +
    (numItems % numSlideShow);
  let remainder = numItems % numSlideShow;
  console.log(lastSlide);
  console.log(numItems);
  const slickAddDataset = () => {
    slickItems[0].classList.add("current-slide");
    slickItems.forEach((slickItem, i) => {
      slickItem.dataset.slickNum = i;
    });
  };

  slickAddDataset();

  const displaySlide = (numslideShow) => {
    for (let j = 0; j <= numslideShow - 1; j++) {
      slickItems[j].classList.add("slick-active");
    }
  };

  const controlActiveSlide = (fromSlide, toSlide) => {
    slickItems.forEach((slickItem, i) => {
      if (i < fromSlide || i > toSlide) {
        slickItem.classList.remove("slick-active");
      }
      if (i >= fromSlide && i <= toSlide) {
        slickItem.classList.add("slick-active");
      }
    });
  };
  displaySlide(numSlideShow);

  const activeControlSlide = () => {
    if (currentSlide === 0) {
      controlRight.classList.add("control-active");
      controlLeft.classList.remove("control-active");
    }
    if (currentSlide > 0 && currentSlide < lastSlide) {
      controlRight.classList.add("control-active");
      controlLeft.classList.add("control-active");
    }
    if (currentSlide === lastSlide) {
      controlRight.classList.remove("control-active");
      controlLeft.classList.add("control-active");
    }
  };
  activeControlSlide();

  const transateSlide = (numSlideTranslate) => {
    let widthItem = slickItems[0].clientWidth;
    slickList.style.transition = ".7s";

    slickList.style.transform = `translateX(${
      -widthItem * numSlideTranslate
    }px)`;
  };

  ///////////// THE WAY 1 ////////////////////////
  const controlRightSlide = () => {
    let remainItems = numItems - numSlideShow - currentSlide;
    if (remainItems < numSlideShow) {
      transateSlide(currentSlide + remainItems);
      controlActiveSlide(currentSlide + remainItems, numItems - 1);
      currentSlide += remainItems;
      console.log(currentSlide);
    }
    if (remainItems > numSlideShow) {
      transateSlide(currentSlide + numSlideShow);
      controlActiveSlide(
        currentSlide + numSlideShow,
        (currentSlide + numSlideShow) * 2 - 1
      );
      currentSlide += numSlideShow;
      console.log(currentSlide);
    }
  };
  ///////////// THE WAY 2 ////////////////////////

  const controlLeftSlide = () => {
    const surSlide = currentSlide % numSlideShow;
    if (currentSlide === lastSlide && surSlide > 0 && currentSlide != 0) {
      console.log("run");
      transateSlide(lastSlide - surSlide);
      controlActiveSlide(currentSlide - surSlide, numItems - surSlide);
      currentSlide = currentSlide - surSlide;
      console.log(currentSlide);
    }
    if (surSlide === 0 && currentSlide != 0) {
      transateSlide(currentSlide - numSlideShow);
      controlActiveSlide(currentSlide - numSlideShow, currentSlide - 1);
      currentSlide = currentSlide - numSlideShow;
    }
  };

  //  ADD EVENT LISTENER
  controlRight.addEventListener("click", () => {
    controlRightSlide();
    activeControlSlide();
  });
  controlLeft.addEventListener("click", () => {
    controlLeftSlide();
    activeControlSlide();
  });
  window.addEventListener("resize", () => {
    transateSlide(0);
    displaySlide(numSlideShow);
  });
}

// ///////////RESPONSIVE WITH SLIDER //////////////////

let homeSpot = document.querySelector(".home-spot");
let homeHit = document.querySelector(".home-hit");

slickSlider(homeSpot);
slickSlider(homeHit);
