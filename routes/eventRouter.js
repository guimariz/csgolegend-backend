import express from 'express';
import DadosHLTV from '../dadosHLTV.js';

const eventRouter = express.Router();

let dadosHLTV = new DadosHLTV();

eventRouter.get('/', async (req, res) => {
  res.send(await dadosHLTV.getEvents());
});

eventRouter.get('/:id?', async (req, res) => {
  res.send(await dadosHLTV.getEvent(req.params.id));
});

eventRouter.get('/name/:name', async (req, res) => {
  res.send(await dadosHLTV.getEventByName(req.params.name));
});

eventRouter.get('/past/:start&:end', async (req, res) => {
  res.send(await dadosHLTV.getMatchesStats(req.params.start, req.params.end));
});

export default eventRouter;
