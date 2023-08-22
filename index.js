let myhttp = require('http');


let myserver = myhttp.createServer(
  function(myrequest, myresponse) {
    console.log(myrequest.url);

    let mytext;
    if (myrequest.url === "/sup") {
      mytext = "Whats up buddy...";
    } else {
      mytext = "I don't know you!";
    }

    myresponse.writeHead(200, { "Content-Type": "text/plain" });

    myresponse.end(mytext);
  }
);


myserver.listen(8080, "0.0.0.0");

console.log("server started");
