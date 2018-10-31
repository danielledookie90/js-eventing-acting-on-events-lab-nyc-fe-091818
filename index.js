const dodger = document.getElementById('dodger')

dodger.style.backgroundColor = 'pink'

let dodgerPosition = 0

//dodger.style.left = '380px'

function moveDodger(event) {
  const keycode = event.which
  console.log(keycode)
if (keycode === 37) {
  // this is the left arrow key
  let oldLeft = dodger.style.left
  console.log(oldLeft)
  oldLeft = parseInt(oldLeft,10)
  dodger.style.left = (oldLeft - 10) + 'px'
} else if (keycode === 39) {
  //this is the right arrow key
  moveDodgerRight(event)
} else if (keycode === 38) {
} else if (keycode === 40) {
// down
}
}

function moveDodgerRight() {}

function moveDodgerRight(event) {
if (event.which === 39) {
  let oldLocation = dodger.style.left
  
  if (oldLocation === '360px') {
    return
  }
  
  oldLocation = parseInt(oldLocation,10)
  
  dodger.style.left = (oldLocation + 10) + 'px'
}  
}
  
document.addEventListener('keydown', moveDodger)