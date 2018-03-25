// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const myTable = document.getElementById('pixelCanvas');
const myCustomDiv = document.createElement('tbody');

submitBtn.onclick = function(){
	event.preventDefault();
	makeGrid();
}


function makeGrid() {
	let tableHeight = document.getElementById('inputHeight').value;
	let tableWidth = document.getElementById('inputWidth').value;

	// Your code goes here!
	for(let h=1; h<= tableHeight; h++){
		let tr = document.createElement('tr');
		for (let w=1; w<= tableWidth; w++){
			let td = document.createElement('td');
			td.addEventListener('click', function backgroundColor() {
				let color = document.getElementById('colorPicker').value;
        td.style.backgroundColor = color;
    	});

			tr.appendChild(td);
		}
		myCustomDiv.appendChild(tr);
	}
	myTable.appendChild(myCustomDiv);

}
