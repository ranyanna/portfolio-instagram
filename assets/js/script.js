const grid = document.querySelector('.grid')
const modalContainer = document.querySelector('.modal-container')
const modalNome = document.querySelector('#modal-nome')
const modalDescricao = document.querySelector('#descricao')
const modalLink = document.querySelector('#modal-link')
const modalImg = document.querySelector('.projeto')

projects.forEach(project => {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = project.imagem

    card.addEventListener('click', () => {
        modalContainer.classList.remove('hidden')
        modalNome.textContent = project.nome
        modalDescricao.textContent = project.descricao
        modalLink.href = project.link
        modalImg.src = project.imagem
    })

    card.appendChild(img)
    grid.appendChild(card)
})

const close = document.querySelector('#close')
close.addEventListener('click', () => {
    modalContainer.classList.add('hidden')
})