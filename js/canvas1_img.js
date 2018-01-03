/**
 * Created by bigWhite on 18/1/3.
 */
window.onload = function() {
    $('#imgBox').click( function() {
       console.log('合成图片');
        merge();
    });
    // $('.code-img').hide();
    // $('.show-img').show();
    var data = ['../img/qr_bg.png','http://ou2blo0sw.bkt.clouddn.com/qr.png'], base64 = [];
    // var $my_canvas=$(".qr-img");
    // var my_canvas=$my_canvas[0];
    // var my_canvas = document.createElement('canvas');
    // var context=my_canvas.getContext("2d");
    // my_canvas.width=648;
    // my_canvas.height=952;
    // context.rect(0,0,my_canvas.width,my_canvas.height);
    // context.fillStyle='#fff';
    // context.fill();
    // preImage("../img/qr_bg.png",
    //     function(x,y,width,height){
    //         context.save();
    //         context.drawImage(this,x,y,width,height);
    //         context.restore();
    //     },{"x": 0,"y": 0,"width":648,"height":952}); // 大小和位置都按照设计图设置即可
    // preImage("../img/qr.png",
    //     function(x,y,width,height){//二维码图片
    //         context.save();
    //         context.drawImage(this,x,y,width,height);
    //         context.restore();
    //
    //     },{"x":46,"y":741,"width":165,"height":165});  //大小和位置都按照设计图设置即可，生成新图片后大小调整通过scss控制
    //
    // function preImage(url,callback,wo) {
    //     var img = new Image(); //创建一个Image对象，实现图片的预下载
    //     img.src = url;
    //     img.crossOrigin = 'Anonymous';
    //     if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
    //         callback.call(img, wo.x, wo.y, wo.width, wo.height);
    //         return; // 直接返回，不用再处理onload事件
    //     }
    //     img.onload = function () { //图片下载完毕时异步调用callback函数。
    //         callback.call(img, wo.x, wo.y, wo.width, wo.height);//将回调函数的this替换为Image对象
    //     };
    // }
    function merge(){
        draw(function(){
            document.getElementById('imgBox').innerHTML='<p style="padding:10px 0">合成图片成功！可以鼠标另存图片查看我是否是一张图片~~！</p><img src="'+base64[0]+'">';
        })
    }
    function draw(fn){
        var c=document.createElement('canvas'),
            ctx=c.getContext('2d'),
            len=data.length;
        c.width=648;
        c.height=952;
        ctx.rect(0,0,c.width,c.height);
        ctx.fillStyle='#fff';
        ctx.fill();
        function drawing(n){
            if(n<len){
                var img=new Image;
                img.crossOrigin = 'Anonymous'; //解决跨域
                img.src=data[n];
                img.onload=function(){
                    if(n==1){
                        ctx.drawImage(img,46,741,165,165);
                    }
                    else{
                        ctx.drawImage(img,0,0,c.width,c.height);
                    }
                    drawing(n+1);//递归
                }
            }else{
                //保存生成作品图片
                base64.push(c.toDataURL("image/jpeg"));
                fn();
            }
        }
        drawing(0);
    }
}