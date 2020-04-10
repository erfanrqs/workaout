

function getPosition(el){
 
  return{
    left : el.getBoundingClientRect().left,
    top : el.getBoundingClientRect().top,
  }

 }

var box = document.querySelector('#square');

document.onkeyup = function (e) { 

  var keyCode = e.keyCode || e.which,
      arrow = {left: 37, up: 38, right: 39, down: 40 };

  if (e.shiftKey) {
    switch (keyCode) {
      case arrow.left:
        box.style.left = (getPosition(box).left-10)+'px'
        break;
      case arrow.right:
        box.style.left = (getPosition(box).left+10)+'px'
        break;
      case arrow.up:
        box.style.top = (getPosition(box).top-10)+'px'
      break;
      case arrow.down:
        box.style.top = (getPosition(box).top+10)+'px'
      break;
    }
  }else if( e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40 || e.keyCode === 37 ){
      switch(e.keyCode){
        case 38 : 
          box.style.top = (getPosition(box).top-1)+'px'
        break
        case 39 : 
          box.style.left = (getPosition(box).left+1)+'px'
        break
        case 37 : 
          box.style.left = (getPosition(box).left-1)+'px'
        break
        case 40 : 
          box.style.top = (getPosition(box).top+1)+'px'
        break
        default :
          return true
      }
  }
}


