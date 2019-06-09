// use debouce bc we dont need 100 or even 1000 runnings of checkslide
// this is not good for pref
// debounce runs checkSlide only 5 times per second

function debounce(func, wait = 20, immediate = true) {
  var timeout
  return function() {
    var context = this,
      args = arguments
    var later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

const sliderImages = document.querySelectorAll(".slide-in")

function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    //half way through the image
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2

    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height
    const isHalfShown = slideInAt > sliderImage.offsetTop
    const isNotScrolledPast = window.scrollY < imageBottom
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add("active")
    } else {
      sliderImage.classList.remove("active")
    }
  })
}

window.addEventListener("scroll", debounce(checkSlide))
