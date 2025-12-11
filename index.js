let grid = document.querySelector(".grid");
let submit = document.querySelector(".submit");

submit.addEventListener("click", function(event) {
    event.preventDefault();
    let number = Number(document.querySelector(".number").value);
    if ((number > 0 && number <= 100) && Number.isInteger(number))
    {
        grid.replaceChildren()
        for(let i = 0; i < number; i++)
        {
            let column = document.createElement("div");
            column.classList.add("column");
            grid.appendChild(column)
            for(let j = 0; j < number; j++)
            {
                let cell = document.createElement("div");
                cell.classList.add("cell");
                cell.onmouseover = () => { cell.style.background = "black"; };
                column.appendChild(cell)
            }
        }
    }
    else {
        alert("Number must be a positive integer below 100")
    }
})