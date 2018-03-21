const path = require('path');
const express = require('express');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.resolve(process.cwd(), 'build')));

app.get('*', (req, res) => { //eslint-disable-line no-unused-vars
  res.sendFile(path.resolve(process.cwd(), 'build/index.html'));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`); // eslint-disable-line no-console
});
