const express = require('express');
const app = express();
const PORT = 3001;
const API_KEY = 'AIzaSyAfHNk2CTX44LJiSKEYy1jmYgSuMk8IABA';

app.get('/', (req, res) => {
  res.send('Default route');
});

app.listen(PORT, () => console.log('Server running on: ', PORT));
