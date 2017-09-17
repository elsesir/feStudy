/**
 * Created by bigWhite on 17/8/8.
 */
//call /apply/bind函数学习
Function.protptype.bind2 = function(context) {
    var aArgs = Array.prototype.slice.call(arguments,1);
    var self = this;
    F = function () {};
    bound =  function () {
        var innerArgus = Array.prototype.slice.call(arguments);//可以接受参数
        var finalArgus = aArgs.concat(arguments);//这时的argument是调用bind函数的对象的参数
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
var obj = { a:2, b:3 , c:4};
//alert(test.sum.call(obj,7,8,9).result);
//alert(test.sum.apply(obj, [ 9,0,1]));
var sum2 = test.sum;
//sum2();//sum2的this指向window
var sum = test.sum.bind(obj,1,3);//sum的this指向obj
alert( sum(2) );
//alert(test.sum(1,2,3).result);
//alert(binds(test.sum,obj,5,6,7));

/*  参数：待检测字符串；返回：json格式信息）
 *     思路：URL一般语法格式为：
 *     protocol :// hostname[:port] / path / [;parameters][?query]#fragment
 * 使用函数split()分割输入字符串。
 * 首先以'?'分割为两部分，[0]主要是协议主机信息，[1]为查询信息；
 * [0]:以'://'分割出协议信息，'/'分割主机和路径。':'分割端口号；
 * [1]:以'#'分割Query和fragment,'&'分割Query各信息。
 * */
function parseUrl(url) {
    var i;
    var str0 = url.split('?');      //以'？'区分查询语句和地址信息
    var str1 = str0[0].split('://');//以'://'区分协议名和主机信息
    var url_protocol = str1[0];     //获取协议名
    var str2 = str1[1].split('/');  //以'/'区分主机和路径
    var url_host ,url_port;
    if( str2[0].indexOf(':'))       //以':'区分主机和端口号
    {
        url_host = str2[0].split(':')[0];
        url_port = str2[0].split(':')[1];
    } else {
        url_host = str2[0];
    }
    var url_path = '/';             //获取路径名
    for( i=1 ; i< str2.length;i++) {
        url_path =url_path + str2[i] + '/';
    }
    var url_query = {};            //获取查询信息
    var str3 = str0[1].split("#"); //以'#'区分查询信息和信息片段
    var url_fragment = str3[1];
    var str4 = str3[0].split('&'); //以'&'区分查询信息各字段
    for(i=0; i<str4.length; i++)   //查询字段
    {
        var temp = str4[i].split('=');
        url_query[temp[0]] = temp[1];
    }
    return {
        protocol : url_protocol,
        host: url_host,
        port: url_port,
        path: url_path,
        query: url_query,
        fragment: url_fragment
    }
}

var url = "http://www.taobao.com/php/index.php?key=123456&name=xiangruding&value=20170308&mid=1830246&token=loyyehkvk";
// console.log(parseUrl(url));
/*  参数：待检测字符串；返回：1（正确），0（错误）
 *     思路：设立一个存放括号信息的栈，存放左侧括号信息"( 、 < 、{ 、[ ",逐个字符检测，
 * 遇到左侧括号则入栈；遇到右侧括号则于栈顶字符比较，如栈非空且成对则将栈顶字符出栈，否则返回0；
 * 当字符串逐个检测完毕后，栈中无信息，则返回1，表示输入字符串正确；否则，返回0.
 *     问题：题目对大括号的处理条件不清晰，"}{"也会被识别为错误，是指只要大括号为成对出现就不为错？
 * 还是只有给出情况"}{"不为错？"}({)"是否判错？因此函数按照和其他括号同样的方式处理的，
 * 即"}{"也返回0。*/
function verify(str) {
    var matchstr= new Array;//存储括号信息的栈
    var i;
    for(i= 0; i<str.length; i++) {
        //遇到左侧括号入栈
        if(str[i] == '(' || str[i] == '{' || str[i] == '[' || str[i] == '<') {
            matchstr.push(str[i]);
        } else if(str[i] == ')') { //遇到右侧括号信息且栈不空则比较是否成对
            if(matchstr.length !=0 && matchstr[matchstr.length-1]=='('){
                matchstr.pop();//栈不空则比较且成对则栈顶出栈
            } else {
                return 0;  //否则返回0
            }
        } else if( str[i] == '}') {
            if(matchstr.length !=0 && matchstr[matchstr.length-1]=='{'){
                matchstr.pop();
            } else {
                return 0;
            }

        } else if( str[i] == ']') {
            if(matchstr.length !=0 && matchstr[matchstr.length-1]=='['){
                matchstr.pop();
            } else {
                return 0;
            }
        }
        else if( str[i] == '>') {
            if(matchstr.length !=0 && matchstr[matchstr.length-1]=='<'){
                matchstr.pop();
            } else {
                return 0;
            }
        }
    }
    if(matchstr.length == 0) { //如果输入字符串检测完毕而信息栈已空，则输入信息正确
        return 1;
    }
    else {
        return 0;
    }
}
// console.log(verify("---(++++)----"));

//拷贝
//深拷贝
var obj = { a:1, arr: [2,3] };
var shallowObj = shallowCopy(obj);
function deepClone (obj,c) {
    var newobj = obj || {};
    if (typeof obj !== 'object') {
        return;
    } else if (window.JSON) {
        str = JSON.stringify(obj); //系列化对象
        newobj = JSON.parse(str); //还原
    } else {
        for (var i in obj) {
            newobj[i] = typeof obj[i] === 'object' ?
                cloneObj(obj[i]) : obj[i];
        }
    }
    return newobj;
}
//浅拷贝
function shallowCopy(src) {
    var dst = {};
    for (var prop in src) {
        if (src.hasOwnProperty(prop)) {
            dst[prop] = src[prop];
        }
    }
    return dst;
}
var china = {
    nation : '中国',
    birthplaces:{
        1:'北京',
        2:'上海',
        3:'广州'},
    skincolr :'yellow',
    friends: {
        nation:'中国'
    }

};
var meimei = {
    nation : 'china',
    birthplaces:'浙江',
    skincolr :'yellow',
    friends:{
        name : '李磊',
        nation: '中国'     }
};
var cc = deepClone(china);
var ca = shallowCopy(china);
//  console.log(cc);
//   console.log(ca);
//合并两个对象
function mixin(source, obj1){
    var source = source ||{};//o是否存在
    var i,p,obj1;
    for(i=0;i<arguments.length;i++) {//通过两个合并的方式，实现多个(>2)个数组合并
        obj1 = arguments[i+1];
        for (p in arguments[i+1]){
            if(obj1.hasOwnProperty(p) ){//不考虑原型的属性
                if(!source.hasOwnProperty(p) )
                {
                    source[p]= (typeof obj1[p] === "object")? mixin(source[p],obj1[p]):obj1[p];//类似深拷贝
                }
                else if(typeof source[p] === "object"){
                    mixin(source[p],obj1[p]);
                }
            }
        }
    }
    return source;
}
var a = {
    a1: 10,
    a2: 20,
    a3: {
        c1: 10,
        c2: 30
    },
    a4: 41
};

var b = {
    a3: {
        c4: 40
    },
    a4: 40
};
var c = {
    a5: {
        c4: 40
    }
};

mixin(a , b);
//console.log(a);
// console.log(meimei);
var lilei = mixin(lilei,china);
//console.log(lilei);



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




// //bom学习
// //重复达到最大值后取消间歇调用。
// /*var num = 0;
var max = 5;
var intervalId = null;
function incrementNumber(){
     num++;
     // if(num == max) {
     //     clearInterval(intervalId);
     //     alert("done");
     // }
    if (num < max)  {
        setTimeout(incrementNumber,500);
       // alert(num);
    } else {
        alert("Done");
    }
 }
 setTimeout(incrementNumber,500);
 //intervalId = setInterval ( incrementNumber, 500) ;

// //location对象
/*function getQueryStringArgs() {
    var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
    args = {},
    items = qs.length ? qs.split("&") : [],
        item = null,
        name = null,
        value = null,
        i =0,
        len = items.length;
    for (i=0; i<len; i++) {
        item = item[i].split("=");
        name = decodeURLComponent(item[0]);
        value = decodeURLComponent(item[1]);

        if (name.length) {
            args[name] = value;
        }
    }
    return args;
}*/

