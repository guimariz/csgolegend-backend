import express from 'express';
import DadosHLTV from '../dadosHLTV.js';

const playerRouter = express.Router();

let dadosHLTV = new DadosHLTV();

playerRouter.get('/:id', async (req, res) => {
  res.send(await dadosHLTV.getPlayer(req.params.id));
});

playerRouter.get('/name/:name', async (req, res) => {
  res.send(await dadosHLTV.getPlayerByName(req.params.name));
});

playerRouter.get('/stats/:id', async (req, res) => {
  res.send(await dadosHLTV.getPlayerStats(req.params.id));
});

playerRouter.get('/stats/:start&:end', async (req, res) => {
  res.send(await dadosHLTV.getPlayerStats(req.params.start, req.params.end));
});

export default playerRouter;
