const http = require('https');

const server = http.createServer();

server.on('request', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(() => {
        res.end('hello')
    }, 1000)
});

server.listen(3332, () => {
    process.title = '程序员成长指北测试进程';
    console.log('进程id', process.pid);
})