const express = require('express');
const path = require('path');
const app = express();
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};

app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.get('/api', (req, res) => {
  res.send(mockResponse);
});

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Brad', lastName: 'Traversy' },
    { id: 3, firstName: 'Mary', lastName: 'Swanson' }
  ];
  res.json(customers);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log('App listening on port: ' + PORT);
});