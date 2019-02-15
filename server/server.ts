import * as express from 'express';
import * as serveIndex from 'serve-index';
import * as url from 'url';
import { ws } from './ws';
import { cfg } from '../config';

const port = cfg.port;
const www = './server/www';

const app = express();
app.use('/ws', ws);

app.use((req, res, next) => {
  const path = url.parse(req.url).pathname;
  if (!path.match(/\.(css|js|html|jpg|png|gif|svg)$/i)) {
      res.sendFile('index.html', { root: www });
      return;
  }
  next();
});

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.use((req, res, next) => {
  console.log('url not found', req.url);
  next();
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

