const http = require('http');

http.createServer((req,resp)=>{
  resp.write('<h1>hello world bhaee ..<h1/>');
  resp.end();
}).listen(4500); 
