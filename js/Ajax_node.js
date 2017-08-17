/**
 * Created by bigWhite on 17/8/7.
 */

$(document).ready(function(){
    $("button").click(function(){
        /*//prompt提示框使用。
        var result = prompt("What is your name?","");
        if (result !== null) {
        alert("welcome," + result);
        }*/
        //点击按钮上传输入用户名，并比较
        var user_name = $("#name").val();
        //alert(user_name);
       ///jQuery实现ajax
        // get 去服务器获取信息
        $.get("http://127.0.0.1:3000/users/getData", { name: user_name }, function(data){
            console.log('res:');
            console.log(data);
        });
        // post 提交数据到服务器
        /*$.post("http://127.0.0.1:3000/users/verify", { name: user_name }, function(data){
            console.log('res:');
            console.log(data);
        });
        */
       //JavaScript:Ajax请求
       /*var xhr = new XMLHttpRequest();
        //onload替代onreadyRequestchange/readyState;
        xhr.onload = function(){
            if((xhr.status >=200 && xhr.status < 300) || xhr.status == 304) {
                 alert("异步请求成功"+ xhr.responseText);
            } else {
                    alert("Request was unsuccessful :" + xhr.status);
            }
        };
       //get请求
       var url = "http://127.0.0.1:3000/users/getData";
        geturl = addURLParam(url, "name", user_name);
        xhr.open("get",geturl,true);
        xhr.timeout = 1000;//超时
        xhr.ontimeout = function() {
            alert("request did not return in a second.")
        };*/
        xhr.send();
       //post请求
        /*var url = "http://127.0.0.1:3000/users/verify";
        xhr.open("post",url,true);
        //模仿表单提交数据
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(serialize(user_name));
        */
    });
});

/*//Ajax请求

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
*/
//get请求，向URL末尾添加查询字符串函数
function addURLParam(url, name, value) {
    url += ( url.indexOf("?") == -1 ? "?" : "&");
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}

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
/*
xhr.onpregress = function(event) {
    var divStatus = document.getElementById("status");
    if (event.lengthComputable) {
        divStatus.innerHTML = "Received " + event.position + "of" +
            event.totalSize + " bytes";
    }
};*/
//表单序列化，这个只包含没有名字的表单字段，完整见书437页。
function serialize(form) {
    var parts = [];
    parts.push(encodeURIComponent("name") + "=" + encodeURIComponent(form));
   return parts.join("&");
}


/*
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
*/
/*
//FormData类型
var data = new FormData() ;
data.append("name","sas");
*/
/*//图像ping
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
*/

