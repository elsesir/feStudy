window.onload=function(){$("#imgBox").click(function(){var o,i,g,c;console.log("合成图片"),o=function(){document.getElementById("imgBox").innerHTML='<p style="padding:10px 0">合成图片成功！可以鼠标另存图片查看我是否是一张图片~~！</p><img src="'+l[0]+'">'},i=document.createElement("canvas"),g=i.getContext("2d"),c=a.length,i.width=648,i.height=952,g.rect(0,0,i.width,i.height),g.fillStyle="#fff",g.fill(),function n(t){if(t<c){var e=new Image;e.crossOrigin="Anonymous",e.src=a[t],e.onload=function(){1==t?g.drawImage(e,46,741,165,165):g.drawImage(e,0,0,i.width,i.height),n(t+1)}}else l.push(i.toDataURL("image/jpeg")),o()}(0)});var a=["../img/qr_bg.png","http://ou2blo0sw.bkt.clouddn.com/qr.png"],l=[]};