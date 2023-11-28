const _ = require('lodash') //lodash is a utility library

const items = [1, [2, [3, [4]]]]
console.log(items)

const newItems = _.flattenDeep(items)
console.log(newItems)