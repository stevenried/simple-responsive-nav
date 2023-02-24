const navToggleBtn = document.getElementById('navbar-links-toggle')
const navbarLinks = document.querySelector('.navbar-links')
const navLinks = document.querySelectorAll('.navbar-links li')

navToggleBtn.addEventListener('click', () => {
  navToggleBtn.classList.toggle('open')
  navbarLinks.classList.toggle('open')
})

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navbarLinks.classList.remove('open')
    navToggleBtn.classList.remove('open')
  })
})
