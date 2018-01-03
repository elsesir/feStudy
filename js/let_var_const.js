/**
 * Created by bigWhite on 17/9/17.
 */
/*var a=1;
 console.log(1);
 setTimeout(function(){console.log(2)},0);
 console.log(3);
 */
/*   var arr = [];  // arr = { 0: xx , 1: xx }
 function outer() {
 var i = 0;
 for (; i < 10; i++) {
 arr[i] = function inner() {
 console.log(this);
 this.b = 'xby';
 return i;
 }
 }
 }
 outer();
 arr[9]();//this->arr;
 // console.log(arr);
 var i = 10;
 function inner () {
 var i = 100;
 var a = {
 i: 2,
 b: function () {
 console.log(i);
 },
 c: {
 i: 1
 }
 };
 a.b();
 }
 inner();//100
//b:function(){console.log(this.i);} a.b()=>2

 */
/*
//var 和 let 区别,1.let块级作用域，var 函数作用域
 var a = [];
 for(var i=0;i<10;i++) {
 a[i] = function() {
 console.log(i);
 };
 }
 a[6]();//10
 for (let i=0;i<10;i++) {
 a[i] = function() {
 console.log(i);
 };
 }
 a[5]();//5

//let 解决闭包问题：var 输出为10；let输出为1-10；
 function createfunction() {
 var a = new Array();
 for (let i = 0; i < 10; i++) {
    a[i] = function () {
        return i;
        };
    }
    return a;
 }
 createfunction();
 var b = createfunction();
 for(var i=0;i<10;i++) {
     console.log(b[i]());
 }
 //2.let不会变量提升,const 也不会变量提升
(function () {
    console.log(i);
    var i = 0;
    console.log(j);
    let j = 0;
    console.log(h);
    const h = 3;
})();
//3.暂时性死区
var tmp=123;
if(true) {
    tmp = "abc";
    let tmp ;
}//报错
 var tmp=123;
 if(true) {
 tmp = "abc";
 var  tmp ;
 console.log(tmp);//abc
 }
 console.log(tmp);//abc

//4.不允许重复声明
function func1() {
    let i = 0;
    var i = 2;
    console.log(i);
}
func1();//运行报错

function add (num) {
    let num = 12;
    console.log(num);
    return num;
}
add(1);
function ant () {
    let nu = 1;
    let nu =2;
    console.log(nu);
}
ant();*/

//const常量：块级作用域，声明时必须赋值，赋值不可改变，不可重复声明，变量不提升，
//const只保证变量名指向的地址不变，不保证该地址的数据不变。
/*const a = { age: 13};
a.name = "xby";
console.log(a);
const b = [];
b.push("love");
console.log(b);
const c = {};
c = { name: "re"};
//const如果希望将本身冻结，可以使用Object.freeze()方法
const  d = Object.freeze({});
d.name = "like";
console.log(d);//freeze后不可以改变对象属性，d保持为{}，不报错。*/
var tmp=123;
if(true) {
    tmp = "abc";
    var  tmp ;
    console.log(tmp);
}
console.log(tmp);

