const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// untuk sampel data nya 
let users = [
  { id: 1, username: 'user1' },
  { id: 2, username: 'user2' },
];

app.use(express.json());

// route nya
app.get('/', (req, res) => {
  res.send('User API nya sudah berjalan!');
});

// mengambil semua
app.get('/users', (req, res) => {
  res.json(users);
});

// get spesifikasi user by id
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// menambahkan user baru
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});


// start servernya
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
