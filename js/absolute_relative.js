/**
 * Created by bigWhite on 17/6/12.
 */

window.onload=function() {
    // $("#btnLeftSide").bind("click", function() {
    //     $("#leftCon").append('<img src="../img/阴阳师-神乐.png" height="200" alt="ShenYue" />');
    // });
    // $("#btnRightSide").bind("click", function() {
    //     $("#rightCon").append('<img src="../img/阴阳师-晴明.png" height="200" alt="QingMing" />');
    // });

    var oTestImg = document.getElementById("testImg"),
        oTestBtn = document.getElementById("testBtn");


    oTestBtn.onclick = function () {
        if (this.innerHTML === "改为absolute") {
            oTestImg.style.position = "absolute";
            this.innerHTML = "去除absolute";
        } else {
            oTestImg.style.position = "static";
            this.innerHTML = "改为absolute";
        }
    };

    // var funShowDisplay = function() {
    //     $("#displayDisplay").text("现在的display属性值是：" + $("#tableCell").css("display"));
    // };
    // funShowDisplay();
    // $("#button").click(function() {
    //     $("#tableCell").toggle();
    //     funShowDisplay();
    // });
}



