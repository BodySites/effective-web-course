const buttonDown = document.querySelector('.main-content__down')
const mainContentContainer = document.querySelector('.main-content__container')

buttonDown.addEventListener('click', () => down())

function down() {
   mainContentContainer.scrollIntoView({
      alignToTop: true,
      scrollIntoViewOptions: {
         behavior: 'smooth'
      }
   })
}

const burger = document.querySelector('.header__burger')
const navlist = document.querySelector('.header__navbar')

burger.addEventListener('click', () => {
   burger.classList.toggle('active')
   navlist.classList.toggle('active')
   document.body.classList.toggle('lock')
})