var http = require('http');

http.createServer((req, res) => {
    if (req.url == '/new_page_not_go') {
        res.writeHead(204); // 
        return 
        
    }
    // seq  x
    // ack            
    //             ack x + 1
    //             seq = y 
    // ack = y + 1
    res.writeHead(200, {'Content-Type' : 'text/html;charset=UTF8'})
    res.write("hello world");
    res.end(`
        <html>
        <body>
            <a href="/new_page_not_go">去新的页面</a>
        </body>
        </html>
    `)
})
.listen(3000)