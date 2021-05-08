import express from 'express';
import bodyParser from 'body-parser';

import matchRouter from './routes/matchRouter.js';
import teamRouter from './routes/teamRouter.js';
import playerRouter from './routes/playerRouter.js';
import eventRouter from './routes/eventRouter.js';
import authRouter from './routes/AuthRouter.js';
import DadosHLTV from './dadosHLTV.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', authRouter);
app.use('/match', matchRouter);
app.use('/team', teamRouter);
app.use('/player', playerRouter);
app.use('/event', eventRouter);

const host = '127.0.0.1';
const port = '3000';
const url = `http://${host}:${port}`;

let dadosHLTV = new DadosHLTV();

let data = new Date(1617332400000);

app.get('/recent', async (req, res) => {
  res.send(await dadosHLTV.getRecentThreads());
});

app.get('/news', async (req, res) => {
  res.send(await dadosHLTV.getNews());
});

app.get('/streams', async (req, res) => {
  res.send(await dadosHLTV.getStreams());
});

app.get('/teste', (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`${url}...`);
});
