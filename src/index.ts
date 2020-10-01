import Http from 'http';

const PORT: number = 5000;

const server: Http.Server = Http.createServer(
  (req: Http.IncomingMessage, res: Http.ServerResponse) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  },
);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on ${PORT} port`);
});
