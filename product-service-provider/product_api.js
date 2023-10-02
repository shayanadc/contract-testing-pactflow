const express = require('express');
const app = express();
const port = 5000;
app.get('/products', (req, res) => {
  res.append('Content-Type', 'application/json').status(200).send(
    [
      {
        id: 2512,
        type: "t-shirt",
        name: "Gem V",
      },
      {
        id: 2515,
        type: "shirt",
        name: "Aqua B",
      },
    ]
  );
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});