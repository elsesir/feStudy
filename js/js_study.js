/**
 * Created by bigWhite on 17/8/8.
 */
//call /apply/bind函数学习
/*Function.prototype.bind = function (oThis) {
         if (typeof this !== "function") {
               // closest thing possible to the ECMAScript 5 internal IsCallable function
              throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
             }

         var aArgs = Array.prototype.slice.call(arguments, 1),//获取bine传入参数数组，去除第一个参数
                 fToBind = this,//在fBound里引用这里的this
                 fNOP = function () {},
                 fBound = function () {
                   return fToBind.apply(this instanceof fNOP && oThis ? this : oThis || window,
                                           aArgs.concat(Array.prototype.slice.call(arguments))); // 将aArgs添加到fBound参数数组末尾(concat)
                };

         fNOP.prototype = this.prototype;
         fBound.prototype = new fNOP();//原型链fBound->this

         return fBound;//新生产的函数
 };*/
Function.protptype.bind = function(context) {
    var aArgs = Array.prototype.slice.call(arguments,1);
    var self = this;
    F = function () {};
    bound =  function () {
        var innerArgus = Array.prototype.slice.call(arguments);//可以接受参数
        var finalArgus = aArgs.concat(arguments);//这时的argument是调用bind函数的对象的参数
        //return self.apply(context, finalArgus);
        return self.apply((this instanceof F ? this : context),finalArgus);
    };
    //为了方便构造函数的使用，实现传递原型链
    F.prototype = self.prototype;
    bound.prototype = new F();
    return bound;
};
//bind函数
Function.prototype.bind = function (oThis) {
    if( typeof this !== "function") {
        //报错
        throw new TypeError("Function.prototype.bind - what is trying to be boun");
    }
    var aArgs = Array.prototype.slice.call(arguments,1);
    fToBind = this;
    fNOP = function() {};
    fBound = function() {
        return fTobind.apply((this instanceof fNOP && oThis ? this : oThis || window),
        aArgs.concat(Array.prototype.call(arguments)));

    };
    fNOP.protptype = fTobind.prototype;
    fBound.prototype = new fNOP();
    return fBound;

};



var a = 10;
var b = 20;
var c = 30;
 var test = {
    a: 5,
    b: 6,
     c:7,
    sum: function (a, b, c) {
        var self = this;
        function getA() {
            //alert( this.a );//全局变量a = windows
           // alert(this);//this->全局变量window
            return self.a;//不能用this，不能传递进去
        }
        function getB() {
            return self.b;
        }
        function getC() {
            return self.c;
        }
        alert( a + "&" + b + "&" + c);
        return getA() + getB() + getC();
    }

};


var obj = { a:2, b:3 , c:4};
//alert(test.sum.call(obj,7,8,9).result);
//alert(test.sum.apply(obj, [ 9,0,1]));
var sum2 = test.sum;
//sum2();//sum2的this指向window
var sum = test.sum.bind(obj,1,3);//sum的this指向obj
alert( sum(2) );
//alert(test.sum(1,2,3).result);
//alert(binds(test.sum,obj,5,6,7));

// //bom学习
// //重复达到最大值后取消间歇调用。
// /*var num = 0;
// var max = 5;
// var intervalId = null;
// function incrementNumber(){
//      num++;
//      // if(num == max) {
//      //     clearInterval(intervalId);
//      //     alert("done");
//      // }
//     if (num < max)  {
//         setTimeout(incrementNumber,500);
//        // alert(num);
//     } else {
//         alert("Done");
//     }
//  }
//  setTimeout(incrementNumber,500);
//  //intervalId = setInterval ( incrementNumber, 500) ;
// */
// //location对象
// /*function getQueryStringArgs() {
//     var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
//     args = {},
//     items = qs.length ? qs.split("&") : [],
//         item = null,
//         name = null,
//         value = null,
//         i =0,
//         len = items.length;
//     for (i=0; i<len; i++) {
//         item = item[i].split("=");
//         name = decodeURLComponent(item[0]);
//         value = decodeURLComponent(item[1]);
//
//         if (name.length) {
//             args[name] = value;
//         }
//     }
//     return args;
// }*/
//

function people() {
    console.log(this);
}

var p = new people;

console.log(p instanceof people);