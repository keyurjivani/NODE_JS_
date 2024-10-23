const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });




  
  if(res.url=="/"){
//     fs.readFile("index.html", "utf-8", (err, data) => {
        
//       if (err) {
//         // res.writeHead(200, { "Content-Type": "text/html" });
//         console.log(err);
//       } else {
//         // res.writ/eHead(200, { "Content-Type": "text/html" });
//         console.log(data);
        
//         res.end(data);
//       }
    
//   })

return res.end("hello");
  }
   else if (req.url === "/login") {
   return res.end("Login successful");
  } 
  else if (req.url === "/signup") {
    // res.writeHead(200, { "Content-Type": "text/html" });
  return  res.end("Signup successful");
  } else if (req.url === "/contact") {
    // res.writeHead(200, { "Content-Type": "text/html" });
  return  res.end("Contact us");
  } else if (req.url === "/service") {
    // res.writeHead(501, { "Content-Type": "text/html" });
  return  res.end("How can I help you?");
  }
});

server.listen(8090, () => {
  console.log("Server started on port 8090 ok");
});