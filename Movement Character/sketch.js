let Link_forward = [
  [0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 2, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 0, 0, 0],
  [0, 0, 0, 1, 3, 5, 4, 4, 5, 5, 4, 5, 5, 3, 1, 0, 0, 0],
  [0, 0, 1, 2, 5, 5, 4, 5, 4, 5, 4, 4, 5, 5, 2, 1, 0, 0],
  [5, 7, 6, 6, 5, 4, 5, 4, 5, 4, 5, 5, 4, 5, 0, 0, 0, 0],
  [6, 8, 8, 5, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 6, 7, 6, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 9, 4, 6, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 4, 5, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 5, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]
]

let Colors_Link = {
  0: "Lightgreen",      //background color for link
  1: [0, 0, 0],         //outline Black
  2: [54, 120, 36],     //hat/cloths Dark green
  3: [77, 161, 55],     //hat/cloths Light green
  4: [214, 190, 9],     //hair Yellow
  5: [156, 143, 62],     //hair Brown
  6: [87, 60, 19],      //brown outline
  7: [176, 151, 97],    //skin mid color
  8: [230, 208, 161],   //skin light color
  9: [0, 160, 215]      //Earing color
} 



function setup() {
  createCanvas(1000, 1000);
  background("lightgreen");

  DrawLink_forward(Link_forward, Colors_Link)
}


function draw() {
  
}

function DrawLink_forward (Link_forward, Colors_Link) {
  for(let x = 0; x < Link_forward.length; x++) {
    for(let y = 0; y < Link_forward[x].length; y++) {
      let Color_index = Link_forward[x][y]
      let Colors = Colors_Link[Color_index]

      if (Colors.length == 3) {
        fill(Colors[0], Colors[1], Colors[2])
      }else if (Colors.length == 6) {
        fill(Colors[3], Colors[4], Colors[5])
      }else if (Colors.length == 9) {
        fill(Colors[6], Colors[7], Colors[8])
      }
      else {
        fill("Lightgreen")
      }
      strokeWeight(0)
      rect(y * 10, x * 10, 10, 10)
    }
  }
}




  
