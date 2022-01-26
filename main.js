const canvas = document.querySelector('canvas')

const forestImg = document.querySelector('#forest')
const oscarImg = document.querySelector('#danny_schwarzy')

canvas.height = forestImg.height
canvas.width = forestImg.width

const context = canvas.getContext('2d')

// Copy the forest image in the canvas to use it
context.drawImage(forestImg, 0, 0)

// Iterate over the columns of the canvas (by 5px each time)
for(let i=0; i<canvas.width; i+=5){
  // Iterate over the rows of the canvas (by 5px each time)
  for(let j=0; j<canvas.height; j+=5){

    // Get the Red, Green, Blue and opacity value for the current px
    const data = context.getImageData(i, j, 1, 1).data

    // To get the luminosity of the pixel we sum every channel (Red/Green/Blue)
    // and then divide it by 3 to get the mean value
    const greyLvl = Math.floor(data[0] + data[1] + data[2] / 3)

    // We set our "pencil color" to the grey lvl
    context.fillStyle =`rgb(${greyLvl},${greyLvl},${greyLvl})` 

    // We create a 5 by 5 rectangle of the grey color
    context.fillRect(i, j, 5, 5)
  }
}

