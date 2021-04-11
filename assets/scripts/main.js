// get all the elements that has js-scroll  class
const scrollElements = document.querySelectorAll(".js-scroll");

// detect the elements that touches the offset or inside the screenview
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

// detect elements that out of the screen view
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

// add additional class to the elements 
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

// remove the additional class if the elements is not on screenheight
const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

// if its true, set the opcaity from 0 to 1
// else delete the additional class "scrolled" from scroll-elements
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

// add event listener for scroll
window.addEventListener("scroll", () => {
  handleScrollAnimation();
});