const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// sample datanya
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

// mid ware
app.use(bodyParser.json());
app.use(cors());

// route nya
app.get('/', (req, res) => {
  res.send('ini express api nya sudah berjalan!');
});

// mengambil semua items
app.get('/items', (req, res) => {
  res.json(items);
});

// mengambil specific item dari id
app.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((item) => item.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// add a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
