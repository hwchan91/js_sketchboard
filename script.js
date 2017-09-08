var toggle = 0;
var number = 10;

$(document).ready(function() {
$('body').append('<button id="tog">Erase</button>, <button id="clearGrid">Clear grid</button>, <button id="newGrid">New grid</button>, <div class="container"></div>');
$('.container').css({'height':'300px','width':'300px','outline':'1px solid black'});
drawGrid(number);
draw();

function drawGrid(number) {
for (var j = 1; j <= number * number; j++) {
	$('body').find('.container').append('<div class="pixel"></div>');
}
var pixelLength = 300/number;
$('.pixel').append('<div class="colorTile"></div>');
$('.pixel').css({'float':'left','outline':'1px solid black','height':pixelLength,'width':pixelLength});
$('.colorTile').css({'height':'100%','width':'100%','opacity':'0'});
}


$('#tog').click(function() {
	if (toggle == 0) {
    toggle = 1;
    $('#tog').text('Draw');
  } else {
    toggle = 0
    $('#tog').text('Erase');
  }
});


function draw() {
$('.colorTile').hover(function() {
  if(toggle === 0) {
 			var opacity = +$(this).css('opacity');
  		opacity += 0.1;
			$(this).css({'background-color':'red','opacity': opacity});
  } else{
  		var opacity = +$(this).css('opacity');
  		opacity -= 0.2;
			$(this).css({'opacity': opacity});
     }

});
}


$('#clearGrid').click(function() {
	$('.colorTile').css({'opacity':'0'});
});

$('#newGrid').click(function() {
	number = prompt("How many squares per row?");
  /*if (isNAN(number)) {
  	alert("Please enter a number");
    return;
  }*/
  $('.pixel').remove();
  drawGrid(number);
  draw();

});

});
