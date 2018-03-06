/**
 * Created by bigWhite on 18/2/12.
 */
$(document).ready( function() {
    console.log('see you');
    var img_circle = $('.img-circle'),
        img_circle_inner = $('.img-circle-inner'),
       page, startX, startY, Xc, Yc, left;
    /*初始设置*/
    page = 1;
    img_circle_inner.css('left', '-100%');
    $('.page-circle').find('.circle-icon:eq(0)').addClass('circle-icon-active');
    /**
     * 动画效果
     * @param node - 元素节点
     * @param move - 移动距离
     * @param callback - 回调函数
     */
    function changeAnimate(node, move, callback) {
        node.animate(
            {
                left: move
            },
            'normal',
            'swing',
            callback
        )
    }
    setInterval(function() {
        if(page === 3 ) {
            page = 1;
            $('.page-circle').find('.circle-icon').removeClass('circle-icon-active');
            $('.page-circle').find('.circle-icon:eq('+ (page - 1) + ')').addClass('circle-icon-active');
            changeAnimate(img_circle_inner, '-400%', function() {
                img_circle_inner.css('left', '-100%');
            });
        } else {
            page += 1;
            $('.page-circle').find('.circle-icon').removeClass('circle-icon-active');
            $('.page-circle').find('.circle-icon:eq('+ (page - 1) + ')').addClass('circle-icon-active');
            changeAnimate(img_circle_inner, '-' + page* 100 + '%');
        }

    },4000);
    /**
     * 滑动处理
     */
    img_circle.on('touchstart', function(e) {
        var touch1 = e.originalEvent;
        startX = touch1.changedTouches[0].pageX; // 开始时手指位置Y
        startY = touch1.changedTouches[0].pageY; // 开始时手指位置Y
        left = parseInt(img_circle_inner.css('left')); // 开始时轮播图位置
    });
    img_circle.on('touchmove', function(e) {
        var touch2 = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        Xc = touch2.pageX - startX;
        Yc = touch2.pageY - startY;
        if( Math.abs(Xc) > Math.abs(Yc)) { // 横向移动
            e.preventDefault(); // 屏蔽默认事件，防止触发浏览器默认事件，如前进或后退
        }
        img_circle_inner.css('left', left + Xc);
    });
    img_circle.on('touchend', function(e) {
        if( Xc > 60 && page > 1) { // 向右滑动且可以翻页
            page -=1;
            $('.page-circle').find('.circle-icon').removeClass('circle-icon-active');
            $('.page-circle').find('.circle-icon:eq('+ (page - 1) + ')').addClass('circle-icon-active');
            changeAnimate(img_circle_inner, '-' + page* 100 + '%');
        }
            else if( Xc > 60 && page === 1) { // 向右滑动，但是第一页
            page = 3;
            $('.page-circle').find('.circle-icon').removeClass('circle-icon-active');
            $('.page-circle').find('.circle-icon:eq('+ (page - 1) + ')').addClass('circle-icon-active');
            changeAnimate(img_circle_inner, '0', function() {
                img_circle_inner.css('left', '-300%');
            });
        }
        else if(Xc < -60 && page < 3) { // 向左滑动且可以翻页
            page +=1;
            $('.page-circle').find('span').removeClass('circle-icon-active');
            $('.page-circle').find('span:eq('+ (page - 1) + ')').addClass('circle-icon-active');
            changeAnimate(img_circle_inner, '-' + page* 100 + '%');
        }
        else if(Xc < -60 && page == 3) { // 向左滑动且最后一页
            page = 1;
            $('.page-circle').find('span').removeClass('circle-icon-active');
            $('.page-circle').find('span:eq('+ (page - 1) + ')').addClass('circle-icon-active');
            changeAnimate(img_circle_inner, '-400%', function() {
                img_circle_inner.css('left', '-100%');
            });
        }
        else {
            changeAnimate(img_circle_inner, left); // 如果没有达到翻页要求，则回到原位
        }
    })
});