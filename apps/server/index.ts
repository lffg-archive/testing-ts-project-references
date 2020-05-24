import { createServer } from 'http';
import { parse } from 'url';
import { toInt, sumAll } from '../../packages/sum-all';

const server = createServer((req, res) => {
  if (!req.url) {
    return res.end('Invalid URL.');
  }

  const url = parse(req.url);
  const query = new URLSearchParams(url.query || '');

  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      // Where are you, beloved pipeline operator? :-D
      result: sumAll(toInt([...query.values()]))
    })
  );
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening at: <http://localhost:${port}>.`);
});
