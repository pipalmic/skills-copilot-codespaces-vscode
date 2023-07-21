// Create web server
var express = require("express");
var app = express();
// Create path
var path = require("path");
// Create bodyParser
var bodyParser = require("body-parser");
// Create urlencodedParser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// Create port
var port = 5000;
// Create static folder
app.use(express.static("public"));
// Create comments.html
app.get("/comments.html", function(req, res) {
    res.sendFile(path.join(__dirname + "/comments.html"));
});
// Create comments.js
app.post("/comments.html", urlencodedParser, function(req, res) {
    response = {
        name: req.body.name,
        comments: req.body.comments
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
// Create server
app.listen(port);
console.log("Server running at http://localhost:" + port);
// Create comments.html
// <html>
//     <head>
//         <title>Comments</title>
//     </head>
//     <body>
//         <h1>Comments</h1>
//         <form action="comments.html" method="POST">
//             <p>Name: <input type="text" id="name" name="name"></p>
//             <p>Comments: <textarea id="comments" name="comments" rows="10" cols="30"></textarea></p>
//             <p><input type="submit" value="Submit"></p>
//         </form>
//         <script src="comments.js"></script>
//     </body>
// </html>
// Create comments.js
// window.onload = function() {
//     document.getElementById("comments").addEventListener("submit", comments);
// };
// function comments() {
//     var name = document.getElementById("name").value;
//     var comments = document.getElementById("comments").value;
//     var result = document.getElementById("result");
//     var commentsResult = name + " wrote: " + comments;
//     result.innerHTML = commentsResult;
// }
