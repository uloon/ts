let b:10;
// b="hello";//报错

//any表示任意类型，相当于关闭ts编译,TS中尽量不用
let a:any;
a=10;
a="hello"

let c:unknown;
c=a;//any可赋值给任意变量，unknown则不行

//类型断言
c = a as string;

//void函数返回空值
function fn():void{

}
//never表示函数不会返回
function fn2():never{
    throw new Error("");
}

let d:object;//普通的定义对象，一般不用
d={};
d=function(){}

let d1:{name:string,age?:number,[propName:string]:any}
//name必须有，age可有可无，[propName:string]:any表示可添加其他任意属性名的变量

//定义函数结构
let e:(a:number,b:number)=>number;//两个number类型的参数，返回值为number

//声明数组类型
let f:string[]
let f1:Array<number>

//元组：长度固定的数组
let g:[string,string];

//枚举 enum
enum Gender{
    male=0,
    female=1
}
let h:{name:string,gender:Gender}
h={
    name:'xm',
    gender:Gender.female
}

//类型的别名
type myType = 1|2|3|4;
let i:myType;