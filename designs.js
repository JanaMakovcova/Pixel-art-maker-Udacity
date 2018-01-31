
const tabulka = $('#pixel_canvas');

function makeGrid(event) {
  let height = $('#input_height').val();
  let width = $('#input_width').val();
  let retezec  = '';
  event.preventDefault(); //at se to neprekresli zpet
for (let i = 0; i < height; i++) {
  retezec = retezec +'<tr>';
  for (let j = 0; j < width; j++) {
    retezec = retezec +'<td></td>';
  }
  retezec = retezec + '</tr>';
}
return retezec;
}

function setSize(){
tabulka.html(makeGrid(event));
tabulka.on("click","td", function(){
  let vybranaBarva = $('#colorPicker').val();
  $(this).css('background-color', vybranaBarva);
})
}
