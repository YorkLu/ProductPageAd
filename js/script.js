//通过clipboard.js复制文本
var clipboard_wechat_id = new ClipboardJS('.btn-wechat-id');
var clipboard_open_wechat = new ClipboardJS('.btn-open-wechat');

//复制微信名称
$(".btn-wechat-id").click(function () {
    $.toast("已复制，打开微信即可粘贴并搜索",3000);
});

//调起微信
$(".btn-open-wechat").click(function () {
    window.location.href = "weixin://";
    setTimeout(function () {
        //超时无法打开，到微信下载页
        window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.tencent.mm";
    },3000);
});

//iframe动态加载
function loadFrame() {
    var productId = "productId";
    var productCode = "productCode";
    var url = "http://wx.10086.cn/website/businessPlatform/shopDetail?productId=";
    if(!GetURLString(productId)&&!GetURLString(productCode)) {
        url = "http://wx.10086.cn/website/businessPlatform/universalShop";
        console.log(url);
    }
    else if(GetURLString(productId)&&GetURLString(productCode)) {
        url = "http://wx.10086.cn/website/businessPlatform/shopDetail?productId=" + GetURLString(productId)+"&productCode="+GetURLString(productCode);
        console.log(url);
    }
    else if(GetURLString(productId)){
        url = "http://wx.10086.cn/website/businessPlatform/shopDetail?productId=" + GetURLString(productId);
        console.log(url);
    }
    else {
        url = "http://wx.10086.cn/website/businessPlatform/universalShop";
        console.log(url);
    }
    $("<iframe src="+url+" class='productPage blur' frameborder='0' scrolling='no'></iframe>").prependTo('body');
}

//获取URL参数
function GetURLString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return  r[2];
    return null;
}

//关闭对话框
$(".icon-close").click(function () {
    $(".shade").hide();
    $(".productPage").removeClass("blur");
    $(".productPage").attr("z-index","999");
});