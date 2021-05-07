import express from 'express';
import PlayerController from '../controllers/PlayerController.js';
import DadosHLTV from '../dadosHLTV.js';

const playerRouter = express.Router();

let dadosHLTV = new DadosHLTV();

playerRouter.get('/:id', async (req, res) => {
  let data = await new PlayerController().getPlayerOverallId(req.params.id);
  res.send(data);
});

playerRouter.get('/name/:name', async (req, res) => {
  let data = await new PlayerController().getPlayerOverall(req.params.name);
  res.send(data);
});

playerRouter.get('/card/:id', async (req, res) => {
  let data = await new PlayerController().getPlayerCard(req.params.id);
  res.send(data);
});

playerRouter.get('/stats/:id', async (req, res) => {
  let data = await new PlayerController().getPlayerStats(req.params.id);
  res.send(data);
});

playerRouter.get('/ranking/:start&:end', async (req, res) => {
  res.send(await dadosHLTV.getPlayerRanking(req.params.start, req.params.end));
});

export default playerRouter;
