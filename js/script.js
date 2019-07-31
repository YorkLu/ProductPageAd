var clipboard_wechat_id = new ClipboardJS('.btn-wechat-id');

clipboard_wechat_id.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    e.clearSelection();
    $.toast("已复制，打开微信即可粘贴并搜索",3000);
});

var clipboard_open_wechat = new ClipboardJS('.btn-open-wechat');
clipboard_open_wechat.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    e.clearSelection();
    window.location.href = 'weixin://';
});