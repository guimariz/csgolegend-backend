import express from 'express';
import MatchController from '../controllers/MatchController.js';
import DadosHLTV from '../dadosHLTV.js';

const matchRouter = express.Router();

let dadosHLTV = new DadosHLTV();

matchRouter.get('/:id?', async (req, res) => {
  let data = await new MatchController().getMatch(req.params.id);
  res.send(data);
});

matchRouter.get('/', async (req, res) => {
  let data = await new MatchController().getMatches();
  res.send(data);
});

// Pega o ID Map
matchRouter.get('/matches/:start&:end', async (req, res) => {
  let data = await new MatchController().getMatchesStats(
    req.params.start,
    req.params.end
  );
  res.send(data);
});

matchRouter.get('/stats/:id', async (req, res) => {
  let data = await new MatchController().getMatchStats(req.params.id);
  res.send(data);
});

// Info do ID Map
matchRouter.get('/matchmapstats/:id', async (req, res) => {
  let data = await new MatchController().getMatchMapStats(req.params.id);
  res.send(data);
});

matchRouter.get('/streams/', async (req, res) => {
  res.send(await dadosHLTV.getStreams());
});

export default matchRouter;
