import { server } from '@app/app';

const port = +process.env.PORT || 4000;

const listen = server.listen(port, 'localhost', () => {
  const address = listen.address() as { address: string; port: number };
  console.log(`${address.address}:${address.port}`);
});
