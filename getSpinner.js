function getSpinner(){
	//write the implemetation of the function here
	var counter = 0
	function _up()
	{
		return ++counter;
	}
	function _down () {
		// body...
		return --counter;
	}
	return{
		up: _up,
		down: _down
	}
	
	
}

var spinner = getSpinner();
spinner.up() // => 1
spinner.up() // => 2
spinner.up() // => 3
spinner.up() // => 4
spinner.up() // => 5

spinner.down() // => 4
spinner.down() // => 3
spinner.down() // => 2
spinner.down() // => 1
spinner.down() // => 0
spinner.down() // => -1


