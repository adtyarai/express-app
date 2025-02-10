const express = require('express');
const app = express();
const PORT = 3001;
const API_KEY = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';

app.get('/', (req, res) => {
  res.send('Default route');
});

app.listen(PORT, () => console.log('Server running on: ', PORT));
