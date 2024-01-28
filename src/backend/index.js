const express = require('express');
const app = express();

const helloRoute = require('./api/hello/route');

app.use('/api/hello', helloRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
