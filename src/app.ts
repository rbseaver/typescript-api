import express from 'express';

const app = express();
const port: number = 3000;

app.get('/', (req, res) => {
  res.send('Hey, look! An API!');
  res.send(`Look what you sent: ${req.query}`);
});

app.listen(port, () => {
  return console.log(`Running on port ${port}`);
});

app.listen()


