const slides = document.querySelectorAll('.slides>img')
const left = document.querySelector('.button-left')
const right = document.querySelector('.button-right')
const countSlides = slides.length

let activeSlideIndex

let timeChange = 0

window.addEventListener('load', () => {
   activeSlideIndex = parseInt(localStorage.getItem('activeSlide')) ?? 0
   slides.forEach((slide, key) => {
      slide.style.left = `calc(100vw*${key - activeSlideIndex})`
   })
})

left.addEventListener('click', () => {
   changeSlide('left')
})
right.addEventListener('click', () => {
   changeSlide('right')
})

document.addEventListener('keyup', (event) => {
   if (event.key === 'ArrowLeft') {
      changeSlide('left')
   }
   else if (event.key === 'ArrowRight') {
      changeSlide('right')
   }
   else if (event.key === 'Space') {
      changeSlide('right')
   }
})

function changeSlide(direction) {
   timeChange = performance.now()
   if (direction === 'left') {
      if (--activeSlideIndex < 0) activeSlideIndex = countSlides - 1
   }
   else if (direction === 'right') {
      if (++activeSlideIndex === countSlides) activeSlideIndex = 0
   }

   slides.forEach((slide, key) => {
      slide.style.left = `calc(100vw*${key - activeSlideIndex})`
   })
}

setInterval(() => {
   if (performance.now() - timeChange >= 6000) {
      changeSlide('right')
   }
}, 0)

window.addEventListener('unload', () => {
   localStorage.setItem('activeSlide', activeSlideIndex)
})