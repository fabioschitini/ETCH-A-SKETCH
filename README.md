# ETCH-A-SKETCH
grid.classList.remove("grid")
       container.classList.remove("container")
       
let superContainer=document.querySelector('#superContainer')

        let container1=document.createElement("div")
        container1.classList.add("container")
        superContainer.appendChild(container1)
        let grid1=document.createElement("div")
        grid1.classList.add("grid")
        container1.appendChild(grid1)
