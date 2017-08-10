/**
 * Created by bigWhite on 17/7/4.
 */

$(document).ready(function(){
    //点击按钮显示或者隐藏文字
    var count = 0;
    $("#hide-show").click(function(){
        if(count % 2 == 0) {
            $("#text").hide();
        } else {
            $("#text").show();
        }
        count++;
    });

    $("#yes").click( function() {
        var percent = $("#percent").val();
        if( percent> 100 || percent <0) {
            alert('输入错误！');
            return false;
        }
        if( percent >= 50 ) {
            $(".sx1").css('border-color','lightgreen');
            $(".sx2").css({
                'transform':'rotate(' +(50-percent)*3.6 + 'deg)',
                'border-color': 'lightgreen'
            });

        } else {
            $(".sx1").css('border-color','lightgreen');
            $(".sx2").css({
                'border-color':'lightgray',
                'transform':'rotate(' + (-percent*3.6) + 'deg)'
            })
        }
        $("#percent-show").text(percent + '%');
    });

});