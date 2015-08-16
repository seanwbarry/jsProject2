$(document).ready(function () {

$('#userInput').keydown(function() {
	if (event.which === 13) {
		var fizzBuzzLength = $('#userInput').val();
		$('#userInput').val('');
		$('p').remove();
		main(fizzBuzzLength);
	}
})

//understand .which
//understand val()


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


function main(integer) {				
	if (integer%1 !== 0 || typeof(integer)=='undefined') {
		var integer = 	parseInt(window.prompt("put in an integer"),10);
		if(integer%1 !== 0) {
			alert('please input an integer!');
			main();	
		} else {
			main(integer);
		}		
	} else {		
		fizzBuzz(integer);
	}
}

main();

});