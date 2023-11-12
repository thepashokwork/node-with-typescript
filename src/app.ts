import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js server!');
});

app.listen(port, () => {
  return console.log(`Node.js server is listening on ${ port }`);
});
