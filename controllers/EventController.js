import DadosHLTV from '../dadosHLTV.js';

export default class EventController {
  dadosHLTV = new DadosHLTV();

  constructor() {}

  listar() {}

  async getEvents() {
    return await this.dadosHLTV.getEvents();
  }

  async getEvent(id) {
    return await this.dadosHLTV.getEvent(id);
  }

  async getEventByName(name) {
    return await this.dadosHLTV.getEventByName(name);
  }

  async getPastEvents(start, end) {
    return await this.dadosHLTV.getPastEvents(start, end);
  }
}
