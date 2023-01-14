let b:10;
// b="hello";//报错

//any表示任意类型，相当于关闭ts编译,TS中尽量不用
let a:any;
a=10;
a="hello"

let c:unknown;
c=a;//any可赋值给任意变量
