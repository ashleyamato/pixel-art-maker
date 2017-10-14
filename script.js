document.addEventListener("DOMContentLoaded", function() {
    var newColor = 'red'
    var buttonClicked = function(event) {
      event.target.style.backgroundColor = newColor
      console.log(event.target)
    }

   for (let i = 0; i <= 360; i++) {
     var tile = document.createElement('div')
     tile.style.width = '5%'
     tile.style.height = '5%'
     tile.style.float = "left"
     tile.style.backgroundColor = 'white'
     tile.style.border = '1px solid lightgrey'
     var gridContainer = document.getElementsByClassName('grid-container')[0]
     gridContainer.appendChild(tile)
     tile.addEventListener('click', buttonClicked)
   }

    var palette = document.getElementsByClassName('colors')

    var saveColor = function(event) {
      newColor = event.srcElement.classList[1]
    }

    for (let j = 0; j < palette.length; j++) {
      palette[j].addEventListener('click', saveColor)
    }
 })
