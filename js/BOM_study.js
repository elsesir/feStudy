/**
 * Created by bigWhite on 17/8/8.
 */
//重复达到最大值后取消间歇调用。
var num = 0;
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
        alert(num);
    } else {
        alert("Done");
    }
 }
 setTimeout(incrementNumber,500);
 //intervalId = setInterval ( incrementNumber, 500) ;

//location对象
function getQueryStringArgs() {
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
}

