const {readFileSync, writeFileSync} = require('fs')
console.log('Start')

// Read file and prints
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// if the file is not there node will create one and if the file is there node by default overwrite all the content in the file 
// writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`)

//if you want to append to the file
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`, 
    {flag: 'a'}
    )
    console.log('Done with the task')
    console.log('Starting the next one')