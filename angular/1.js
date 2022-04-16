let str = '2020-11-16'

console.log(str.substring(0, str.lastIndexOf('-')).replace('-', '年') + '月');