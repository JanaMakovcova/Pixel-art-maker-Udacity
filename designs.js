
var tabulka = $('#pixel_canvas');

function makeGrid(event) {
  var height = $('#input_height').val();
  var width = $('#input_width').val();
  var retezec  = '';
  event.preventDefault(); //at se to neprekresli zpet
for (var i = 0; i < height; i++) {
  retezec = retezec +'<tr>';
  for (var j = 0; j < width; j++) {
    retezec = retezec +'<td></td>';
  }
  retezec = retezec + '</tr>';
}
return retezec;
}

function setSize(){
tabulka.html(makeGrid(event));
tabulka.on("click","td", function(){
  var vybranaBarva = $('#colorPicker').val();
  $(this).css('background-color', vybranaBarva);
})
}
