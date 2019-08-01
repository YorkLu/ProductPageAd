/**
 * Created by YorkLu on 2019/8/1.
 */
function checkUA() {
    if(navigator.userAgent.match(/(MicroMessenger)/i)){
        $.alert({
            title: '提示',
            text: '这是11短信引流功能Demo，请点击右上角‘...’，选择通过浏览器打开以确保与客户通过短信访问的体验一致',
            onOK: function () {
                checkUA();
            }});
    }
}