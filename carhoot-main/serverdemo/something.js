const express = require("express")

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("Waddup");
})

app.get('/test', (req, res) => {
    res.send("Waddup");
})

app.get('/time', (req, res) => {
    let date = new Date();
    let responseMessage = `${date}`
    res.send(responseMessage);
})

app.get('*', (req, res) => {
    res.send('Page not found')
})

app.listen(port,() => console.log("Server running on port..." + port))

http.createServer((req,res) => {

    let route = req.url;

    switch(route) {
        case '/test':
    
    res.write("Waddup");
    res.end();
    break;

    case '/time':
    let date = new Date();
    let responseMessage = `${date}`
    res.write("Waddup");
    res.end();
    break;


    default:

    res.write("Waddup");
    res.end();
    break;
    }
})
.listen(3000, ()  => console.log("Server running on port..." + port))
