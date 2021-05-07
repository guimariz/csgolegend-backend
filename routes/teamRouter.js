import express from 'express';
import TeamController from '../controllers/TeamController.js';
import DadosHLTV from '../dadosHLTV.js';

const teamRouter = express.Router();

let dadosHLTV = new DadosHLTV();

teamRouter.get('/', async (req, res) => {
  let data = await new TeamController().getTeamRanking();
  res.send(data);
});

teamRouter.get('/:id?', async (req, res) => {
  let data = await new TeamController().getTeam(req.params.id);
  res.send(data);
});

teamRouter.get('/card/:id?', async (req, res) => {
  let data = await new TeamController().getTeamCard(req.params.id);
  res.send(data);
});

teamRouter.get('/name/:name', async (req, res) => {
  res.send(await dadosHLTV.getTeamByName(req.params.name));
});

teamRouter.get('/stats/:id', async (req, res) => {
  res.send(await dadosHLTV.getTeamStats(req.params.id));
});

export default teamRouter;
