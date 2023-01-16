var b;
// b="hello";//报错
//any表示任意类型，相当于关闭ts编译,TS中尽量不用
var a;
a = 10;
a = "hello";
var c;
c = a; //any可赋值给任意变量，unknown则不行
//类型断言
c = a;
//void函数返回空值
function fn() {
}
//never表示函数不会返回
function fn2() {
    throw new Error("");
}
var d; //普通的定义对象，一般不用
d = {};
d = function () { };
var d1;
//name必须有，age可有可无，[propName:string]:any表示可添加其他任意属性名的变量
//定义函数结构
var e; //两个number类型的参数，返回值为number
//声明数组类型
var f;
var f1;
//元组：长度固定的数组
var g;
//枚举 enum
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var h;
h = {
    name: 'xm',
    gender: Gender.female
};
var i;
