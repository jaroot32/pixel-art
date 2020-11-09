// Select color input
let color = document.getElementById("colorPicker");
// Select size input
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");
let picker = document.getElementById("sizePicker");
// table
let table = document.getElementById("pixelCanvas");

function makeGrid(e) {
    e.preventDefault();
 
    // empty the table first if full
   if (table.innerHTML !== "") {
    table.innerHTML = "";
   }
 
    // creates the table
    for (let i = 0; i < width.value; i++) {
        let height_elem = document.createElement("tr");
        console.log(height_elem)
        for (let j = 0; j < height.value; j++) {
            let width_elem = document.createElement("td");
            width_elem.addEventListener("click", colorer);
            height_elem.append(width_elem);
            table.append(height_elem);
        }
    }
}

// submit event listener
picker.addEventListener("submit", makeGrid);

// coloring callback function
let colorer = function(e) {
    let td = e.target
    if (td.bgColor.includes("#")) {
        td.bgColor = ""
    } else {
        td.bgColor = color.value;
    }
};