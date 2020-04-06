/**
 * 原生js不支持读取文件夹，ActiveXObject不安全且兼容性差，考虑使用nodejs实现读取，前端如果需要的话通过ajax请求获取
 */
const path = require('path')
const fs = require('fs')
function GetJsFileNum(dir) {
    var resultList = 0;
    fs.readdir(dir, function(err, files) {
        if (err) {
          console.error(err)
          return
        }
        files.forEach((filename) => {
            if ('.js'.includes(path.extname(filename))) {
                resultList+=1;
            }
        });
    });
    return resultList;
}