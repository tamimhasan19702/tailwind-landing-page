const btn = document.querySelector('#menu-btn'),
      nav = document.querySelector('#menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})      