
var scrollTrigger = 20;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("nav")[0].style.top=0;
    document.getElementsByClassName("fixed-logo")[0].style.display="block";
  } else {
    document.getElementsByTagName("nav")[0].style.top="10%";
    document.getElementsByClassName("fixed-logo")[0].style.display="none";
  }
};

