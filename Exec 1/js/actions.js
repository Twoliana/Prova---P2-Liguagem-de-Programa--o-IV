let id = null

function blueSquare() {
  let ob1 = document.getElementById('obj1')
  let pos1 = 0
  let pos2 = 0
  clearInterval(id)
  id = setInterval(frame, 15)
  function frame(){
    if(pos1 == 190 || pos2 == 90){
      ob1.style.backgroundColor = "#05ab69";
    }
    else if(pos1 == 250 || pos2 == 140){
      ob1.style.backgroundColor = "blue";
    }
    if(pos1 == 440 || pos2 == 220){
      // ob1.style.background="blue";
      clearInterval(id)
    } else {
      pos1 = pos1 + 2
      pos2++
      ob1.style.left = pos1 + 'px'
      ob1.style.top = pos2 + 'px'
      
    }
  }
}
