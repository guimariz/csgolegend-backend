import express from 'express';
import matchRouter from './routes/matchRouter.js';
import teamRouter from './routes/teamRouter.js';
import playerRouter from './routes/playerRouter.js';
import eventRouter from './routes/eventRouter.js';
import DadosHLTV from './dadosHLTV.js';

const app = express();

app.use(express.json());
app.use('/match', matchRouter);
app.use('/team', teamRouter);
app.use('/player', playerRouter);
app.use('/event', eventRouter);

const host = '127.0.0.1';
const port = '3000';
const url = `http://${host}:${port}`;

let dadosHLTV = new DadosHLTV();

app.get('/recent', async (req, res) => {
  res.send(await dadosHLTV.getRecentThreads());
});

app.get('/getNews', async (req, res) => {
  res.send(await dadosHLTV.getRecentThreads());
});

app.listen(port, () => {
  console.log(`${url}...`);
});
