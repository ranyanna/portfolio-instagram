const grid = document.querySelector('.grid')

projects.forEach(project => {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = project.imagem

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
