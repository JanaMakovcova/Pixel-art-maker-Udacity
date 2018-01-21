
var barva =$('#colorPicker').val();
var height = $('#input_height').val();
var width = $('#input_width').val();
var tabulka = $('#pixel_canvas');


function makeGrid(i, j) {
  var retezec  = '';
for (var i = 0; i < height; i++) {
  retezec = retezec +'<tr>';
  for (var j = 0; j < width; j++) {
    retezec = retezec +'<td></td>';
  }
  retezec = retezec + '</tr>';
}
return retezec;
// Your code goes here!
}

tabulka.html(makeGrid(height,width));
function setSize(){
  tabulka.html(makeGrid(height,width));
  //$('#input_height').attr("value", height.toString());
}
