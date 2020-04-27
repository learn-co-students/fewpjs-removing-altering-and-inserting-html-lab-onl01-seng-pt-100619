let main = document.querySelector('main')
main.remove()

// my solution
let newHeader = document.createElement('h1')
newHeader.setAttribute("id","victory")
newHeader.innerHTML = "POUYA is the champion"

// Flatiron solution
// newHeader.id = "victory"
// newHeader.innerHTML = "Flatiron School is the champion!";
// newHeader.className = "victory";