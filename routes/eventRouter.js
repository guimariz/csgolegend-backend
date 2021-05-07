import express from 'express';
import EventController from '../controllers/EventController.js';
import DadosHLTV from '../dadosHLTV.js';

const eventRouter = express.Router();

let dadosHLTV = new DadosHLTV();

eventRouter.get('/', async (req, res) => {
  let data = await new EventController().getEvents();
  res.send(data);
});

eventRouter.get('/:id?', async (req, res) => {
  let data = await new EventController().getEvent(req.params.id);
  res.send(data);
});

eventRouter.get('/name/:name', async (req, res) => {
  let data = await new EventController().getEventByName(req.params.name);
  res.send(data);
});

eventRouter.get('/past/:start&:end', async (req, res) => {
  let data = await new EventController().getPastEvents(req.params.name);
  res.send(data);
});

export default eventRouter;
