const http = require("http");

const port = process.env.PORT || 3000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({ sum: parseUrlAndGetSum(req.url)}));
};

function parseUrlAndGetSum(url){
    var sum = 0;
    var result = url.split("/");
    for(var i=0; i<result.length;i++){
        if(!isNaN(Number(result[i]))){
            sum += Number(result[i]);
        }
    }

    return sum;
}

const server = http.createServer(requestListener);
server.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});