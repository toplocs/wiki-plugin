const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http');
const https = require('https');
const fs = require('fs');
const dotenv = require('dotenv').config();
const prisma = require('./lib/prisma.js');
const wiki = require('./api');

const port = Number(process.env.PORT);
const useSSL = process.env.USE_SSL === 'true';
const privkey = process.env.PRIVKEY;
const fullchain = process.env.FULLCHAIN;
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: ['https://toplocs.com', 'http://localhost:5173', 'http://localhost:5174'],
  optionsSuccessStatus: 200
}));

app.use('/api/wiki', wiki);

if (useSSL) {
  const sslOptions = {
    key: fs.readFileSync(privkey),
    cert: fs.readFileSync(fullchain)
  };

  https.createServer(sslOptions, app).listen(port, () => {
    console.log(`Wiki plugin is running with SSL on port ${port}`);
  });
} else {
  app.listen(port, () => {
    console.log(`Wiki plugin is running on HTTP port ${port}`);
  });
}