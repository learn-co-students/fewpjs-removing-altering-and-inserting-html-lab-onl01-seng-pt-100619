//1)
const main = document.getElementById("main")
document.body.removeChild(main)

//2)
const newHeader = document.createElement('h1')

// //3)
newHeader.id = "victory"

//4)
newHeader.innerHTML = "Amber is the champion"
document.appendChild(newHeader)


// for (let i = 0; i < 3; i++) {
//     let h1 = document createElement('h1')
//     history.innerHTML = (i + 1).toString()
//     utils.appendChild(h1)
// }

// Element.appendChild(newHeader)