/**
 * Created by bigWhite on 17/8/7.
 */

$(document).ready(function(){
    $("button").click(function(){
        // var result = prompt("What is your name?","");
        // if (result !== null) {
        //     alert("welcome," + result);
        // }
        // var xhr = new XMLHttpRequest();

        // get 去服务器获取信息
        // $.get("http://127.0.0.1:3000/users/getData", { name: 'sas' }, function(data){
        //     console.log('res:');
        //     console.log(data);
        // });

        // post 提交数据到服务器
        // $.post("http://127.0.0.1:3000/users/verify", { name: 'sas' }, function(data){
        //     console.log('res:');
        //     console.log(data);
        // });
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4) {
                if((xhr.status >=200 && xhr.status < 300) || xhr.status == 304) {
                    alert("异步请求成功"+ xhr.responseText);
                } else {
                    alert("Request was unsuccessful :" + xhr.status);
                }
            }
        }
        var data = new FormData() ;
        xhr.open("post","http://127.0.0.1:3000/users/verify",true);
        var form = document.getElementById("name");
        xhr.send(new FormData(form));
    });
});

//Ajax请求

//兼容旧版IE浏览器：不包括XMLHttpRequest的浏览器
function createXHR() {
    if (typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
    }  else if ( typeof ActiveXObject != "undefined") {
        if (typeof arguments.callee.activeXString != "string") {
        var versions = [ "MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],
            i, len;
            for (i=0, len = versions.length;i < len; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                }  catch (ex) {
                    //跳过
                }
            }
    }
    return new ActiveCObject( arguments.callee.activeXString);
    } else {
        throw new Error("No XHR Object available.");
    }
}

var xhr = createXHR();//var xhr = new XMLHttpRequest;//目前形式

//get请求，向URL末尾添加查询字符串函数
/*function addURLParam(url, name, value) {
    url += ( url.indexOf("?") == -1 ? "?" : "&");
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}

var url = "http://127.0.0.1:3000/users/getData";
url = addURLParam(url, "name", "sas");
//同步请求
xhr.open("get",url,false);//同步请求
xhr.send(null);

if((xhr.status >=200 && xhr.status <300 )|| xhr.status == 304) {
    alert("同步请求成功"+xhr.responseText);
}  else {
    alert("request was unsuccessful: " + xhr.status);
}*/

//异步请求，post传输数据.
//异步请求,检测readyState变化
/*xhr.onreadystatechange = function(){
    if(xhr.readyState == 4) {
        try {
            if((xhr.status >=200 && xhr.status < 300) || xhr.status == 304) {
                alert("异步请求成功"+ xhr.responseText);
            } else {
                alert("Request was unsuccessful :" + xhr.status);
            }
        } catch (ex) {
            alert("超时");
        }
    }
};*/
//用load替换readyState属性
xhr.onload = function() {
    if ((xhr.status >= 200 && xhr.status <300 ) || xhr.status == 304) {
        alert("异步请求成功" + xhr.responseText);
    } else {
        alert("request was unsuccessful :" + xhr.status);
    }
};
xhr.onpregress = function(event) {
    var divStatus = document.getElementById("status");
    if (event.lengthComputable) {
        divStatus.innerHTML = "Received " + event.position + "of" +
            event.totalSize + " bytes";
    }
};
//表单序列化，这个只包含没有名字的表单字段，完整见书437页。
/*function serialize(form) {
    var parts = [];
    //var field = null,i,len;
    //for(i=0; len=form )
    parts.push(encodeURIComponent("name") + "=" + encodeURIComponent("sas"));
   return parts.join("&");
}

*/
//跨浏览器CORS
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if("withCredentials" in xhr) {//是否有withCredentials属性
        xhr.open(method,url,true);
    } else if (typeof XDomainRequest != "undefined") {//XDomainrequest是否存在
        xhr = new XDomainRequest();
        xhr.open(method,url, true);
    } else {
        xhr = null;
    }
    return  xhr;
}
var request = createCORSRequest("get","https://www.baidu.com/");
if(request) {
    request.onload = function(){
        alert("onload");
    }
    request.send();
}
/*//var form = { name: 'sas'};
//FormData类型
var data = new FormData() ;
data.append("name","sas");
//var data = new FormData(document.forms[0]);
//xhr.open("get",url,true);//异步请求

//xhr.open("post","http://127.0.0.1:3000/users/verify",true);
xhr.open("get","https://www.baidu.com/",true);
xhr.timeout = 1000;//超时
xhr.ontimeout = function() {
    alert("request did not return in a second.")
};
//var form = document.getElementById("user_name");
//xhr.send(data);
//模仿表单提交数据
//xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xhr.send();
//xhr.send(serialize(form));
//xhr.send(encodeURIComponent("name") + "=" + encodeURIComponent("sas"));
*/
var img = new Image();
img.onload = img.onerror = function() {//onload/onerror事件指向同一个函数
    alert("Done!");
};
img.src = "https://www.baidu.com/";

//JSONP
function handleResponse(response) {
    alert("You're at IP address" + response.ip + ",which is in " +
    response.city + ", " + response.region_name);
}
var script = document.createElement("script");
script.src = "https://www.baidu.com/?callback=handleResponse";
document.body.insertBefore(script, document.body.firstchild);

