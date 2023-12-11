const express = require('express');
const math = require('mathjs');
const app = express();

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send(`Hello, World!`);
});

app.use(express.json());

app.post('/pythagoras', (req, res) => {
  const a = req.body.a
  const b = req.body.b

  const c = math.sqrt(math.pow(a, 2) + math.pow(b, 2));

  res.status(200).json({
    hypotenuse: c
  });
});
