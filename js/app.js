window .addEventListener('keyup', function(e) {
  var ascii = e.keyCode;
  console.log(ascii)
  // Convierte a un array                      (array-like) 
  var tdArray = [...document.getElementsByTagName('td')];
  var position = 0;

  tdArray[position].style.backgroundColor = 'red';

  // event keydowm --> cuando  presiones todas las teclas
  //window.addEventListener('keydown', function(event) {
    tdArray[position].style.backgroundColor = 'white';

    // codigo ASCII (arriba) up = 38
    if (ascii=== 38) {
      position = position - 4;
    }

    // down = 40
    if (ascii=== 40) {
      position = position + 4;
    }

    // left = 37
    if (ascii === 37) {
      position= position - 1;
    }

    // right = 39
    if (ascii === 39) {
      position = position + 1;
    }

    tdArray[position].style.backgroundColor = 'red';
  
});