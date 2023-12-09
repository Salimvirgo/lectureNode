const express = require('express');
const handle = require('./handlers/error');

const app = express();

app.get('/', (req,res) => {
    res.send("Hello World") 
})

app.use(handle.notfound);
app.use(handle.errors);

const PORT = process.env.PORT || 1111
app.listen(PORT, (err) => {
    if(err){
        console.log("There is an error running this server");
    } else {
        console.log(`This server is running on http://localhost:${PORT}`);
    }
})