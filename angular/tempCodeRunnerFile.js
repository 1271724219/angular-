// 产品->ui->前端->后端->测试

// 数组操作方法 ,对象操作方法,字符串等等,不需记住,

// 翻译过程的思路

let arr = [[1, 2, 3, [6, 7, 8]], 1, 2, 34];
arr.flat(Infinity);
// console.log(arr.flat(Infinity));

/* 
多维数组转一维数组，
1.有一个新数组
2.循环判断每一个值到底是数字本身还是数组
3.判断每个元素是否是数组，如果是，拆开循环，如果不是添加到新数组中
4. 返回这个新数组
*/
let count = 0;
function myFlat(arr1) {
  count++;

  let result = [];
  for (let item of arr1) {
    if (Array.isArray(item)) {
      //isArray判断是不是数组
      result = result.concat(myFlat(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(myFlat(arr));
