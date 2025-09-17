const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

// HTTP request logging
app.use(morgan('tiny')); // minimal format

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/owner', (req, res) => { 
  let num = 0;
  for (let i = 0; i < 100000000; i++) {
    num++;
  }
  res.send(`Owned by Sanjoy. Version: ${num}`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
