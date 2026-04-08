const grid = document.querySelector('.grid')

projects.forEach(project => {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = project.imagem

    card.appendChild(img)
    grid.appendChild(card)
})

