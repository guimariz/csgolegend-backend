import DadosHLTV from '../dadosHLTV.js';

export default class PlayerController {
  dadosHLTV = new DadosHLTV();

  constructor() {}

  async getPlayerOverallId(id) {
    return await this.dadosHLTV.getPlayer(id);
  }

  async getPlayerOverall(nome) {
    return await this.dadosHLTV.getPlayerByName(nome);
  }

  async getPlayerCard(id) {
    let {
      name,
      ign,
      image,
      country: { code },
      team,
      statistics,
    } = await this.dadosHLTV.getPlayer(id);

    return { id, name, ign, image, country: { code }, team, statistics };
  }

  async getPlayerStats(id) {
    return await this.dadosHLTV.getPlayerStats(id);
  }
}
