const navHamburguerIcon = document.querySelector('.nav-container__hamburguer')
const navHamburguerContent = document.querySelector(
  '.nav-container__hamburguer-content'
)
const navHamburguerCloseIcon = document.querySelector(
  '.nav-container__hamburguer-close'
)

navHamburguerIcon.addEventListener('click', () => {
  navHamburguerContent.classList.remove('disabled')
})

navHamburguerCloseIcon.addEventListener('click', () => {
  navHamburguerContent.classList.add('disabled')
})
