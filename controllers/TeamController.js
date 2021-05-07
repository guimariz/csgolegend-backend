import DadosHLTV from '../dadosHLTV.js';

export default class TeamController {
  dadosHLTV = new DadosHLTV();

  constructor() {}

  listar() {}

  async getTeamRanking() {
    return await this.dadosHLTV.getTeamRanking();
  }

  async getTeam(id) {
    return await this.dadosHLTV.getTeam(id);
  }

  async getTeamCard(id) {
    let {
      name,
      logo,
      country: { code },
      players,
    } = await this.dadosHLTV.getTeam(id);

    players = players.map((player) => ({
      idPlayer: player.id,
      namePlayer: player.name,
    }));

    return {
      id,
      name,
      logo,
      code,
      players,
    };
  }
}
