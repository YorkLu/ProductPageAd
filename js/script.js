/*
* 样式一：弹窗
* */

//通过clipboard.js复制文本
var clipboard_wechat_id = new ClipboardJS('.btn-wechat-id');
var clipboard_open_wechat = new ClipboardJS('.btn-open-wechat');

//复制微信名称
$(".btn-wechat-id").click(function () {
    $.toast("已复制，打开微信即可粘贴并搜索", 3000);
});

//调起微信
$(".btn-open-wechat").click(function () {
    window.location.href = "weixin://";
    setTimeout(function () {
        //超时无法打开，到微信下载页
        window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.tencent.mm";
    }, 3000);
});

//iframe动态加载
function loadFrame(isShade) {
    var productId = GetURLString("productId");
    var productCode = GetURLString("productCode");
    var secondChannel = GetURLString("secondChannel");
    var pageid = GetURLString("pageid");
    var url = "";
    // if (!productId) {
    //     url = "http://wx.10086.cn/website/businessPlatform/universalShop";
    //     console.log(url);
    // }
    // 原本下面是else if
    if (productCode) {
        url = "http://wx.10086.cn/website/businessPlatform/shopDetail?productCode=" + productCode;
        console.log(url);
    }
    else {
        url = "http://wx.10086.cn/website/businessPlatform/shopDetail?productId=" + productId;
        console.log(url);
    }
    if (secondChannel) {
        if (url.indexOf("?") > -1)
            url += "&secondChannel=" + secondChannel;
        else
            url += "?secondChannel=" + secondChannel;
    }
    if (pageid) {
        if (url.indexOf("?") > -1)
            url += "&pageid=" + pageid;
        else
            url += "?pageid=" + pageid;
    }

    //是否显示遮罩
    if(isShade) {
        $("<iframe src=" + url + " class='productPage blur' frameborder='0' scrolling='no'></iframe>").prependTo('body');
        $(".shade").css("display","table");
        $(".shade").show("normal");
    }
    else{
        $("<iframe src=" + url + " class='productPage' frameborder='0' scrolling='no'></iframe>").prependTo('body');
        $(".productPage").css("z-index", "100");
    }
}

//获取URL参数
function GetURLString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return r[2];
    return null;
}

//关闭对话框
$(".icon-close").click(function () {
    $(".shade").hide();
    $(".productPage").removeClass("blur");
    $(".productPage").css("z-index", "100");
});

/*
* 样式二：通知
* */

function showNote() {
    $.notification({
        title: "戳我",
        text: "马上解锁更多优惠福利~",
        media: "<img src='img/img-coin.png'>",
        data: "click",
        onClick: function(data) {
            showDialog();
        },
        onClose: function(data) {

        },
        time: 999999
    });
}

//主动显示遮罩
function showDialog() {
    $.closeNotification();
    $(".productPage").addClass("blur");
    $(".productPage").css("z-index", "-999");
    $(".shade").css("display","table");
    $(".shade").show("normal");
}