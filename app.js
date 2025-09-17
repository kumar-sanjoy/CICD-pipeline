const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/owner', (req, res) => { 
    let num = 0;
    for(let i=0; i<100000000; i++) {
        num ++;
    }  
    res.send(`Owned by Sanjoy. Version: ${num}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});