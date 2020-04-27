let main = document.querySelector('main')
main.remove()

let newHeader = document.createElement('h1')
// let victory = document.getElementById('victory')
// document.body.insertBefore(newHeader, victory)
newHeader.setAttribute("id","victory")
newHeader.innerHTML = "POUYA is the champion"