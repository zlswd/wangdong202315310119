//导入dgram模块
const dgram = require('dgrram');

//导入fs模块
const fs = require('fs');

//创建服务器socket
const socket = dgram.creatSocket('udp4');

//绑定地址和端口号
socket.bind(6666,'127.0.0.1');

//读取客户端发来的数据
socket.on('message',(data,rinfo) =>{
    fs.writeFile('/uploads/目标文件.jpg',data,(err)=>{
        if(err){
            return console.log(err.message);
        }
        socket.send('文件上传成功',rinfo,port,rinfo.address);
    });
});

//监听异常事件
socket.on('error',(err) =>{
    console.log(err.message);
});
