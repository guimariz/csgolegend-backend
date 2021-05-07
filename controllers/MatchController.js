import DadosHLTV from '../dadosHLTV.js';

export default class MatchController {
  dadosHLTV = new DadosHLTV();

  constructor() {}

  listar() {}

  async getMatch(id) {
    return await this.dadosHLTV.getMatch(id);
  }

  async getMatches() {
    return await this.dadosHLTV.getMatches();
  }

  async getMatchesStats(start, end) {
    return await this.dadosHLTV.getMatchesStats(start, end);
  }

  async getMatchStats(id) {
    return await this.dadosHLTV.getMatchStats(id);
  }

  async getMatchMapStats(id) {
    return await this.dadosHLTV.getMatchMapStats(id);
  }
}
