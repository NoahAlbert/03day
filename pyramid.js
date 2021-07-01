/*
for (let i = 0; i < 5; i++){
    let output = []
    for (let e = i; e > -1; e--){
        output.push('#')
    }
    console.log(output.toString())
}
*/

/* nested loop
function makePyramid(height, character) {
  for (let i = 0; i < height; i++) {
    let output = []
    for (let e = i; e > -1; e--) {
      output.push(character)
    }
    console.log(output.join(' '))
  }
}

makePyramid(5, '#')
*/

/*
function makePyramid(height, character){
  let output = []
  for (let i = 0; i < height; i++) {
    output.push(character)
    console.log(output.join(' '))
  }
}

makePyramid(8, 'z')
*/

function makePyramid(height, character){
  let output = ''
  for (let i = 0; i < height; i++) {
    output += (character + ' ')
    console.log(output)
  }
}

makePyramid(8, 'z')