/**
 * 把网上下载的iconfont复制到项目代码中
 */
var fs = require('fs'),
    stat = fs.stat,
    src = './bak/iconfont/',
    dest = './src/common/fonts/';

if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
}
['iconfont.eot', 'iconfont.svg', 'iconfont.ttf', 'iconfont.woff','iconfont.js'].forEach(function (item) {
    fs.copyFile(src + item, dest+ item, function(){});
});
fs.readFile(src + 'iconfont.css', 'utf-8', function (err, data) {
    data = data.replace(/\.iconfont/g, '[class^="icon-"],[class*=" icon-"]');
    fs.writeFile(dest + 'iconfont.css', data, function () {
        console.log('success!\n');
    });
});