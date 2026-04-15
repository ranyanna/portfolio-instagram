const grid = document.querySelector('.grid')

projects.forEach(project => {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = project.imagem
    img.alt = project.nome

    const overlay = document.createElement('div')
    overlay.classList.add('card-overlay')

    const overlayNome = document.createElement('h4')
    overlayNome.textContent = project.nome

    const overlayDescricao = document.createElement('p')
    overlayDescricao.textContent = project.descricao

    const overlayLink = document.createElement('a')
    overlayLink.href = project.link
    overlayLink.textContent = 'Ver projeto'
    overlayLink.target = '_blank'

    overlay.appendChild(overlayNome)
    overlay.appendChild(overlayDescricao)
    overlay.appendChild(overlayLink)
    card.appendChild(img)
    card.appendChild(overlay)
    grid.appendChild(card)
})

const button = document.querySelector('.theme-toggle')
const body = document.querySelector('body')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')

const savedTheme = localStorage.getItem('theme')

if (savedTheme === 'light') {
    body.classList.add('light')
    sun.classList.add('hidden')
    moon.classList.remove('hidden')
}

button.addEventListener('click', () => {
    body.classList.toggle('light')
    sun.classList.toggle('hidden')
    moon.classList.toggle('hidden')

    if (body.classList.contains('light')) {
        localStorage.setItem('theme', 'light')
    } else {
        localStorage.setItem('theme', 'dark')
    }
})