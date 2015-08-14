$(document).ready(function () {

var a = 'Fizz';
var b = 'Buzz';
function fizzBuzz (integer) {
	for (i=0;i<integer;i++) {
		if ((i+1)%3===0 && (i+1)%5===0) {
			$('body').append('<p>'+a+b+'</p>');
		} else if ((i+1)%5===0) {
			$('body').append('<p>'+b+'</p>');
		} else if ((i+1)%3===0) {
			$('body').append('<p>'+a+'</p>');
		} else {
			$('body').append('<p>'+(i+1)+'</p>');
		}
	}
}

function internalCheck () {
			var integer = 	window.prompt("put in an integer");
			if(integer%1 !== 0) {
				console.log('asfd');
				alert('please input an integer!');
				internalCheck();	
			} else {
				console.log('jkl;');
				console.log(integer);
				fizzBuzz(integer);
			}
		}
		internalCheck();

});