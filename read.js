// import xlsx from 'node-xlsx';
var xlsx = require('node-xlsx');
var fs = require('fs')

// Parse a buffer
// const workSheetsFromBuffer = xlsx.parse(fs.readFileSync('04271.csv'));
// Parse a file

// const workSheets1718 = xlsx.parse('1718beijinglanjie.xlsx');
const workSheets1718 = xlsx.parse('0611.csv');

var arrayData1718 = workSheets1718[0].data
// // var arrayData0427 = workSheets0427[0].data
// // arrayData = arrayData1718
let tels1718 = []
for (let item of arrayData1718) {
    if (item[4] == 'blackNb' || item[4] == 'Invalid Number')
        tels1718.push(item[2])
}
// // console.log(tels1718)
let txtdata = Array.from(new Set(tels1718)).sort().join(",").replace(/,/g, ',\n')
// // // console.log()tels
// txtdata = txtdata.sort()
fs.writeFile('blackandinvalid0611.txt', txtdata)
// let resultData = fs.readFileSync('tels04271718.txt').toString().split(/\s+/g);

// let newResultData = new Map(), newResultData1 = [], newResultData2 = []
// resultData.forEach(i => {
//     if (newResultData.has(i)) {
//         newResultData.set(i, newResultData.get(i) + 1)
//     } else {
//         newResultData.set(i, 1)
//     }

// })
// for (let [key, value] of newResultData) {
//     newResultData1.push({ tel: key, num: value })
// }
// function compare(property) {
//     return (a, b) => {
//         let value1 = a[property]
//         let value2 = b[property]
//         return value2 - value1
//     }

// }

// newResultData2 = newResultData1.sort(compare('num'))
// // data1 = data1.sort()
// newResultData2 = JSON.stringify(newResultData2)
// newResultData2 = newResultData2.replace(/},{/g, '}\n{')

// console.log(newResultData2)
// fs.writeFile('tels04271718_01.txt', newResultData2)
// let data2 = fs.readFileSync('tels04271718_01.txt').toString().replace(/,/g, '\n')
// console.log(data2)
// // data2 = data2.sort()
// fs.writeFile('tels04271718.txt', data2)
