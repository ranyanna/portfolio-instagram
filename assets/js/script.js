const grid = document.querySelector('.grid')

projects.forEach(project => {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = project.image
    img.alt = project.name

    const overlay = document.createElement('div')
    overlay.classList.add('card-overlay')

    const overlayTitle = document.createElement('h4')
    overlayTitle.textContent = project.name

    const overlayDescription = document.createElement('p')
    overlayDescription.textContent = project.description

    const overlayLink = document.createElement('a')
    overlayLink.href = project.link
    overlayLink.textContent = 'Ver projeto'
    overlayLink.target = '_blank'

    overlay.appendChild(overlayTitle)
    overlay.appendChild(overlayDescription)
    overlay.appendChild(overlayLink)
    card.appendChild(img)
    card.appendChild(overlay)
    grid.appendChild(card)
})

const themeToggle = document.querySelector('.theme-toggle')
const body = document.querySelector('body')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const postCount = document.querySelector('#post-count')

postCount.textContent = projects.length

const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'light') {
    body.classList.add('light')
    sun.classList.add('hidden')
    moon.classList.remove('hidden')
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light')
    sun.classList.toggle('hidden')
    moon.classList.toggle('hidden')

    localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark')
})