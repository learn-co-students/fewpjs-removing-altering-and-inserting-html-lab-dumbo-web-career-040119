const main = document.querySelector('main#main')
main.remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = "This person right here is the champion"

document.body.appendChild(newHeader)
