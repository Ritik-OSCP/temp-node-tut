const path = require('path')

//returns path seperator
console.log('SEPERATOR: ', path.sep) 

//Join all arguments together and normalize the resulting path.
const filePath = path.join('/content', 'subfolder', 'text.txt') 
console.log('FILEPATH: ', filePath)

//Return the last portion of a path.
const base = path.basename(filePath) 
console.log('BASENAME: ', base)

//returns the absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log('ABSOLUTE PATH: ', absolute)