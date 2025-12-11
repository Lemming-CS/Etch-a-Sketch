let grid = document.querySelector(".grid");
let submit = document.querySelector(".submit");
let rainbowButton = document.querySelector(".rainbow");
let darkeningButton = document.querySelector(".darkening")
let israinbow = false;
let isdarkening = false

makeGrid()
function makeGrid()
{
    let number = Number(document.querySelector(".number").value);
    if (!number) {
        number = 30;
    }
    if ((number > 0 && number <= 100) && Number.isInteger(number))
    {
        grid.replaceChildren()
        for(let i = 0; i < number; i++)
        {
            let row = document.createElement("div");
            row.classList.add("row");
            grid.appendChild(row);
            for(let j = 0; j < number; j++)
            {
                let cell = document.createElement("div");
                cell.classList.add("cell");
                if (israinbow)
                {
                    cell.onmouseover = () => { cell.style.background = `rgb(${Math.floor(Math.random()*255)},
                     ${Math.floor(Math.random()*255)},
                     ${Math.floor(Math.random()*255)}`; };
                }
                else if(isdarkening)
                {
                    let current = 255
                    cell.style.background = `rgb(255, 255, 255)`
                    cell.onmouseover = () => {
                        current = current - 30;
                        cell.style.background = `rgb(${current},
                         ${current}, 
                         ${current})`;}
                }
                else
                {
                    cell.onmouseover = () => { cell.style.background = "black"; };
                }
                row.appendChild(cell);
            }
        }
    }
    else {
        alert("Number must be a positive integer below 100");
    }
}

rainbowButton.addEventListener("click", function() {
    if (isdarkening) {
        darkeningButton.click()
    }
    israinbow = !israinbow;
    rainbowButton.classList.toggle("act");
    makeGrid();
});

darkeningButton.addEventListener("click", function() {
    if (israinbow) {
        rainbowButton.click()
    }  
    isdarkening = !isdarkening;
    darkeningButton.classList.toggle("act");
    makeGrid();
})

submit.addEventListener("click", makeGrid);
