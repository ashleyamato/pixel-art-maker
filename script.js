document.addEventListener("DOMContentLoaded", function() {

   for (let i = 0; i <= 360; i++) {
     var tile = document.createElement('div')
     tile.style.width = '5%'
     tile.style.height = '5%'
     tile.style.float = "left"
     tile.style.backgroundColor = 'white'
     tile.style.border = '1px solid lightgrey'
     var gridContainer= document.getElementsByClassName('grid-container')[0]
     gridContainer.appendChild(tile)
     gridContainer.style.backgroundColor = 'lightgrey'
   }




 })
