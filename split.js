var fs = require('fs');

// function readfile(txtdata) {
//     var newtxtdata = fs.readFileSync(txtdata).toString().split(/\s+/g);
//     return newtxtdata
// }

// var shequ = readfile('shequ.txt')
// var tr = readfile('tr.txt')
// var black = readfile('black.txt')
// //去重
// function distinct(item) {
//     var distinctArray = Array.from(new Set(item))
//     return distinctArray
// }

// //获得国内手机号
// function getInternal(item1) {
//     var newItem1 = []
//     item1.forEach(function (item2) {
//         if ((parseInt(item2) - 20000000000 < 0) && (item2.length == 11)&&(item2.indexOf("E")<0))
//             newItem1.push(item2)
//     })
//     return newItem1
// }
// //过滤黑名单
// function dropBlack(data, blackData) {
//     var newData = data.filter(function (e) {
//         return blackData.indexOf(e) < 0
//     })
//     return newData
// }

// var shequDistinct = distinct(shequ)
// var trDistinct = distinct(tr)
// var blackDistinct = distinct(black)

// var shequGetInternal = getInternal(shequDistinct)
// var trGetInternal = getInternal(trDistinct)
// var blackGetInternal = getInternal(blackDistinct)

// var newShequ = dropBlack(shequGetInternal, blackGetInternal)
// var newTr = dropBlack(trGetInternal, blackGetInternal)

// var shequtr = Array.from(new Set(newShequ.concat(newTr)))

function writefile(willWriteFile, writeArray) {
    fs.writeFileSync(willWriteFile, writeArray)
}



// var newshequ1 = fs.readFileSync('newtrshequ.txt').toString().replace(/,/g, '\n')
// newShequ = newShequ.replace(/,/g, '\n')
// newTr = newTr.replace(/,/g, '\n')
// shequtr = shequtr.replace(/,/g, '\n')



// writefile('newtr.txt', newTr)
// writefile('newshequ.txt', newShequ)
// writefile('newtrshequ.txt', shequtr)

// console.log("newTr.length, newShequ.length, shequtr.length", newshequ1)

// var newArray=array1.replace(/,/g,'\n')


// var arrayData = fs.readFileSync('uid0707.txt').toString().split(',');
var arrayData1 = fs.readFileSync('uid0707.txt').toString().split(/\s+/g);

// arrayData = arrayData.filter(item => {
//     return arrayData1.indexOf(item) < 0
// })
// // // var newArrayData = arrayData.filter(function (item) {
// // //     return item.indexOf("E+") < 0
// // // })
let newArrayData = Array.from(new Set(arrayData1)).sort()
// newArrayData = newArrayData.sort()
// writefile('blackandinvalid1.txt', newArrayData)
// newArrayData = newArrayData.join(",")
// console.log(newArrayData)
// var new_trshequ1 = fs.readFileSync('blackandinvalid1.txt').toString().replace(/,/g, ',\n')
writefile('uid_07.txt', newArrayData)

// console.log(new_trshequ1, new_trshequ1.length)











