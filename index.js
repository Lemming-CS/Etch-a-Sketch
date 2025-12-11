let grid = document.querySelector(".grid");
let submit = document.querySelector(".submit");
let rainbow = document.querySelector(".rainbow");
let israinbow = false;

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
            let column = document.createElement("div");
            column.classList.add("column");
            grid.appendChild(column);
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
                else
                {
                    cell.onmouseover = () => { cell.style.background = "black"; };
                }
                column.appendChild(cell);
            }
        }
    }
    else {
        alert("Number must be a positive integer below 100");
    }
}

rainbow.addEventListener("click", function() {
    israinbow = !israinbow
    rainbow.classList.toggle("act")
    makeGrid()
});

submit.addEventListener("click", makeGrid);
