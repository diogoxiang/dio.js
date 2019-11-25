#!/usr/bin/env node

console.log(process.cwd())

console.log(__dirname)

// 不拷贝的目录和文件
const ignoreFiles = [
    'node_modules',
    '.npmignore',
    '.env.dev',
    '.env.prod',
    '.env.sit',
    '.env.test',
    '.gitignore',
    'README.md',
    'sys_config.js',
    'vue.config.js',
    'public',
    'bak',
    'init.js',
    'tests',
    'filters',
    'assets',
    'fonts',
    'htmlEdit',
    'dashboard',
    'routes.json',
    'login.vue'
]


var fs=require('fs');
var copy=function(src,dst){
  let paths = fs.readdirSync(src); //同步读取当前目录
  paths.forEach(function(path){
      console.log(path)
      if (ignoreFiles.includes(path)) return
    var _src=src+'/'+path;
    var _dst=dst+'/'+path;
    fs.stat(_src,function(err,stats){ //stats 该对象 包含文件属性
      if(err)throw err;
      if(stats.isFile()){ //如果是个文件则拷贝
        let readable=fs.createReadStream(_src);//创建读取流
        let writable=fs.createWriteStream(_dst);//创建写入流
        readable.pipe(writable);
      }else if(stats.isDirectory()){ //是目录则 递归
        checkDirectory(_src,_dst,copy);
      }
    });
  });
}
var checkDirectory=function(src,dst,callback){
  fs.access(dst, fs.constants.F_OK, (err) => {
    if(err){
      fs.mkdirSync(dst);
      callback(src,dst);
    }else{
      callback(src,dst);
    }
   });
};
checkDirectory(__dirname, process.cwd(), copy);