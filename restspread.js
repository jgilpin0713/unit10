const filterOutOdds = (...arg) => arg.filter(val => val % 2 === 0)

const findMin = (...nums) => Math.min(...nums)
// rest of the nums find the min


findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
