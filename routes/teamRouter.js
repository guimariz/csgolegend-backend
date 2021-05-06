import express from 'express';
import DadosHLTV from '../dadosHLTV.js';

const teamRouter = express.Router();

let dadosHLTV = new DadosHLTV();

teamRouter.get('/', async (req, res) => {
  res.send(await dadosHLTV.getTeamRanking());
});

teamRouter.get('/:id?', async (req, res) => {
  res.send(await dadosHLTV.getTeam(req.params.id));
});

teamRouter.get('/name/:name', async (req, res) => {
  res.send(await dadosHLTV.getTeamByName(req.params.name));
});

teamRouter.get('/team/:id', async (req, res) => {
  res.send(await dadosHLTV.getTeamStats(req.params.id));
});

teamRouter.get('/matchmapstats/:id', async (req, res) => {
  res.send(await dadosHLTV.getMatchMapStats(req.params.id));
});

teamRouter.get('/streams/', async (req, res) => {
  res.send(await dadosHLTV.getStreams());
});

export default teamRouter;
