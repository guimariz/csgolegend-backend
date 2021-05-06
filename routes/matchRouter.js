import express from 'express';
import DadosHLTV from '../dadosHLTV.js';

const matchRouter = express.Router();

let dadosHLTV = new DadosHLTV();

matchRouter.get('/:id?', async (req, res) => {
  res.send(await dadosHLTV.getMatch(req.params.id));
});

matchRouter.get('/', async (req, res) => {
  res.send(await dadosHLTV.getMatches());
});

matchRouter.get('/matches/:start&:end', async (req, res) => {
  res.send(await dadosHLTV.getMatchesStats(req.params.start, req.params.end));
});

matchRouter.get('/matchstats/:id', async (req, res) => {
  res.send(await dadosHLTV.getMatchStats(req.params.id));
});

matchRouter.get('/matchmapstats/:id', async (req, res) => {
  res.send(await dadosHLTV.getMatchMapStats(req.params.id));
});

matchRouter.get('/streams/', async (req, res) => {
  res.send(await dadosHLTV.getStreams());
});

export default matchRouter;
