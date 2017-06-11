/**
 * Created by bigWhite on 17/6/12.
 */
window.onload=function() {
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
}