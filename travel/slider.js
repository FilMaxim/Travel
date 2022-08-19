const slider = document.getElementById("slider"),
  sliderItems = document.getElementById("slides"),
  prev = document.getElementById("btn-prev"),
  next = document.getElementById("btn-next"),
  dot = document.getElementById("dot");


// button_next
const shiftNext = () => {
  sliderItems.classList.add("activeNext");
  const a = sliderItems.firstElementChild;
  sliderItems.append(a);
  next.removeEventListener("click", shiftNext);
  const b = dot.lastElementChild;
  dot.prepend(b);
};

sliderItems.addEventListener("animationend", () => {
  sliderItems.classList.remove("activeNext");
  next.addEventListener("click", shiftNext);
});

next.addEventListener("click", shiftNext);

//button_prev
const shiftPrev = () => {
  sliderItems.classList.add("activePrev");
  const a = sliderItems.lastElementChild;
  sliderItems.prepend(a);
  prev.removeEventListener("click", shiftPrev);
  const b = dot.firstElementChild;
  dot.append(b);
};

sliderItems.addEventListener("animationend", () => {
  sliderItems.classList.remove("activePrev");
  prev.addEventListener("click", shiftPrev);
});

prev.addEventListener("click", shiftPrev);

// phone 390px
const prevBtn = document.getElementById("right-arrow");
const nextBtn = document.getElementById("left-arrow");
const sliderItemsPhone = document.getElementById("slides-phone");
let offset = 0;

const shiftNextPhone = () => {
  if (offset <= 0) {
    offset += 390;
    sliderItemsPhone.style.left = offset + "px";
    const b = dot.firstElementChild;
    dot.append(b);
  }
  // batton right
  if (offset == 390) {
    nextBtn.classList.add("active-btn");
  } else {
    prevBtn.classList.remove("active-btn");
  }
};

const shiftPrevPhone = () => {
  if (offset >= 0) {
    offset -= 390;
    sliderItemsPhone.style.left = offset + "px";
    const b = dot.lastElementChild;
    dot.prepend(b);

  }

  //battom leght

  if (offset == -390) {
    prevBtn.classList.add("active-btn");
  } else {
    nextBtn.classList.remove("active-btn");
  }
};

nextBtn.addEventListener("click", shiftNextPhone);
prevBtn.addEventListener("click", shiftPrevPhone);
