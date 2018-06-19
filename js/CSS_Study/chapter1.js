// window.onload = function () {
//     alert('xby');
// }

// alert('xby');
var octalNum =070;
var intNum = 10;
var hexNmu = 0xA;
var floatNum = 1.1;

var num1 = parseFloat( "12306blue");
// alert(num1);
var text = "this is the letter signma: \u03a3.",
    text2 = "this is the letter signma: A.";
// alert(text);
// alert(text.length);//29

var lang = "Java";
lang = lang + "Script";

var age = 11;
var ageAsString = age.toString();
var ageString2 = age.toString(2);//输出数值的基数
var ageString3 = age.toString(3);//基数任意，不止8，16，2进制
var ageType = typeof age;
var ageStringType = typeof ageAsString;
var zor = 0;
Boolean(zor);//false

var nn = null;
var an = String(nn);
var o = new Object ();

//操作符
var numO = 2;
var numA = 20;
var numB = --numO + numA;
var numC = numO +numA;
var numD = 2;
var numE = numD-- + numA;
var numF = numD + numA;
//
var stringNum = "123blue";//不识别
var stringNUm2 = "22.3";
var boolNum = true;
var numFloat = 22.5;
//function& arguments
function doAdd(num1,num2) {

    arguments[1] = 10;
    alert(arguments[0] + arguments[1]);
}
//
function sayHi (name, message)
{
    return "hello " + name + "," + message;
}
sayHi("ad","How are you ");
function howManyArgs() {
    alert(arguments.length);
}
//参数传递
function setName(obj) {
    obj.name = "nick";
    obj = new Object();
    obj.name = "lili"
    // alert(obj.name);
    var obj2 = obj;
    obj2.name = "harry";
    // alert(obj.name);
}

var person = new Object();
setName(person);

//
function add(num1, num2) {
    sum = num1 + num2;
    return sum;
}
var result = add(20, 30);
//Object对象字面量表示法
function displayInfo(args) {
    var output = " ";
    if (typeof args.name == "string") {
        output += "Name: " + args.name + "\n";
    }
    if (typeof args.age == "number") {
        output += "Age: " + args.age +"\n";
    }
    // alert(output);
}
displayInfo( {
    name:"nick",
     age:29
    });
displayInfo ({
    name:"Greg"
});
var person = {
    name:"nicks",
    age:30
};
//方括号语法
var ageP = person["age"];
var propertyName = "name";
var namep = person[propertyName];

//Array
var colors = new Array (3);
var names = new Array("Greg");
colors[0] = "red";
colors[3] = "blue";//red,空字符,空字符,blue
// alert(colors.toString());
colors.length = 2;//red,undefined
// alert(colors.valueOf());
colors[1] = "green";
colors[colors.length]= "yellow";
// alert(colors.join("\\"));

var person1 = {
    toString : function() {
        return "Nike";
    },
    toLocaleString : function() {
        return "尼克";
    },
    valueOf : function() {
        return "尼尔";
    }
};
var person2 = {
    toString : function() {
        return "lili";
    },
    toLocaleString : function() {
        return "莉莉";
    },
    valueOf : function() {
        return "丽丽";
    }
};

var people = [person1, person2];
// alert(people);
// alert(people.toString());
// alert(people.toLocaleString());
// alert(people.valueOf());

//栈方法
// alert("数组原来长度" + colors.length);
var count = colors.push("blue");
// alert("推入blue后长度" + count);
var item = colors.pop();
// alert("推出" + item);
// alert("推出后长度"  + colors.length);

//队列方法
// alert(colors);
var item2 = colors.shift();
// alert("出队操作"+ item2);
// alert("出队后队列:" + colors + "\n" + "队长" + colors.length);
var count2 = colors.unshift("black","blue");
// alert("反向入队" + count + "\n" + "此时队列："+ colors);

//重排序
// alert(colors + "\n" + colors.reverse() + "\n" + colors.sort());

var values = [0,1,5,15,10];
// alert(values.sort());

function compare (value1,value2) {
    return value1- value2;
}
values.sort(compare);
// alert(values);
//操作方法
// alert(colors);
var color2 = colors.concat();
var color3 = colors.slice(1,4);
var color4 = colors.slice(-2,-1);
var color5 = colors.splice(1,1);
// alert("删除第2项后colors：" + colors);
var color6 = colors.splice(1,0,"orange");
// alert("在第一项后添加orange：" + colors);
var color7 = colors.splice(2,1,"purple");
// alert("将第三项替换为purple：" + colors);
//位置方法
colors.splice(3,0,"orange");
/*alert(colors  + "\n" +
    "orange是：正序" + colors.indexOf("orange") +
    "\n 倒序："+ colors.lastIndexOf("orange")
);*/

//迭代方法
var numbers =  [1,2,3,4,5,6,7,8,9];
var everyBigger2 = numbers.every(function(item, index, array) {
    return (item > 2);
});

// alert ("数组numbers值是否都大于2：" + everyBigger2);

function bigger2 (item,index,array) {
    return (item >2 );
}
var anyBigger2 = numbers.some( bigger2 );
// alert("数组值是否包含大于2的值：" + anyBigger2);


//function类型 arguments.callee/this/caller
function factorial(num) {
    if (num <=1) {
        return 1;
    }
    else {
        // return num * factorial (num-1);
        return num * arguments.callee(num-1);
    }
}
window.color = "red";
var o = { color :"blue" };
function sayColor() {
    alert(this.color);
}
// sayColor();//red

o.sayColor = sayColor;
// o.sayColor();//blue
// sayColor();//red
//
// sayColor.call(window);
// sayColor.call(this);
// sayColor.call(o);
var objectSayColor = sayColor.bind(o);
// objectSayColor();
//


function outer () {
    inner();
}
function outer2() {
    inner();
}
function inner() {
    // alert( inner.caller);//显示调用该函数的函数代码
    // alert(arguments.callee.caller);
}
outer();//outer代码
inner();//null
//
var obj = new Object ("some text")
alert( obj instanceof String);
var strN = 234;
var strS = String(strN);
//Math
var values = [1,2,3,4,5];
var max = Math.max.apply(Math,values);//5
var min= Math.min(values);//NaN
var numFl = Math.floor(Math.random() * 10 + 1);
function selectFrom(lowerValue, upperValue) {
    var choices = upperValue - lowerValue +1 ;
    return Math.floor(Math.random() * choices + lowerValue);
}
var numsf = selectFrom(1,10);
//稳妥构造函数
function Person (name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        // alert(name);
    }
    return o;
}
var friend = Person("nick",29,"teacher");
friend.sayName();

function createFunction(){
    var result = new Array();
    for (var i = 0; i < 10; i++)
    {
        result[i] = function() {
            var j = 'xby'; // VO + [[scope]] ---> VO
            return i;   // 内部函数何时销毁？
        };
    }
    return result;
}

var result = [];
var a = createFunction();
for(var item in a) {
    // console.log(a[item].toString());
    result[item] = a[item]();
}
// var result = createFunction();

function createFunction2(){
    var result = new Array ();

    for(var i = 0; i<10; i++){
        result[i] = function(i) {
            return i;
        }(i); // a[0] = 0;
    }
    return result;
}
var result2 = createFunction2();

var name = "the window";
var object = {
    name: "my Object",

    getNameFunc: function(){
        return function(){
            return this.name;
        };
    }
};
// alert(object.getNameFunc()());

var object2 = {
    name : "my Object2",
    getNameFunc: function(){
        var that = this;
        return function(){
            return that.name;
        };
    }
};
// alert("object2: name =" + object.getNameFunc()());

var a = {
    c: 'xby',
    b: function () {
        console.log(this.c);
    }
}
// a.b();
var d = {
    c: 'sas'
}
d.b = a.b;
d.b();