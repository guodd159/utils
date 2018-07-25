var xlsx = require('node-xlsx');
var path = require('path');
var fs = require('fs');

console.log('开始分析');
console.log(new Date());

//读号码归属地文档
var mobile_list = xlsx.parse('./Mobile.xlsx');
var mobileExcelObj=mobile_list[0].data;
var mobilePreList = [];

for(var m in mobileExcelObj){
  mobilePreList.push(mobileExcelObj[m][0]);
}
//console.log(mobilePreList);

console.log('读取归属地完毕');

//读手机号文档
var telnum_list = xlsx.parse('./allTelNum.xlsx');
var telnumExcelObj=telnum_list[0].data;
var telCount = telnumExcelObj.length;
var num = 0;
var lastPrintNum = 0;

console.log('读取所有手机号完毕');

var data = [];

console.log('开始处理');

for (var i in telnumExcelObj) {
  var telNum=telnumExcelObj[i];
  var telNumPre = parseInt(telNum / 10000);
  var index = mobilePreList.indexOf(telNumPre.toString());
//    console.log(telNum, telNumPre, index, mobileExcelObj[index]);
  if (index !== -1) {
//    console.log(telNum, mobileExcelObj[index]);
    var arr=[];
    var mobileObj=mobileExcelObj[index];
//    console.log(telNum[0]);
      arr.push(telNum[0]);
      arr.push(mobileObj[0]);
      arr.push(mobileObj[1]);
      arr.push(mobileObj[2]);
      arr.push(mobileObj[3]);
      data.push(arr);
  }
  ++num;
  if ((num - lastPrintNum) / telCount > 0.01) {
    lastPrintNum = num;
    console.log(((num / telCount) * 100).toFixed(0), '%');
  }
}

console.log('处理完毕, 开始写入');


var buffer = xlsx.build([
  {
    name:'sheet1',
    data:data
  }
]);
fs.writeFileSync('new_notplatform_0713.xlsx',buffer,{'flag':'w'});

console.log('写入完成');

console.log(new Date());
