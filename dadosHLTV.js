import { HLTV } from 'hltv';

export default class DadosHLTV {
  constructor() {}

  async getMatch(matchId) {
    try {
      const data = HLTV.getMatch({ id: matchId });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getMatches() {
    try {
      const data = HLTV.getMatches();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getMatchesStats(start, end) {
    try {
      const data = HLTV.getMatchesStats({
        startDate: `${start}`,
        endDate: `${end}`,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getMatchStats(matchId) {
    try {
      const data = HLTV.getMatchStats({ id: matchId });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getMatchMapStats(matchId) {
    try {
      const data = HLTV.getMatchMapStats({ id: matchId });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getStreams() {
    try {
      const data = HLTV.getStreams();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getRecentThreads() {
    try {
      const data = HLTV.getRecentThreads();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getTeamRanking() {
    try {
      const data = HLTV.getTeamRanking();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getTeam(matchId) {
    try {
      const data = HLTV.getTeam({ id: matchId });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getTeamByName(teamName) {
    try {
      const data = HLTV.getTeamByName({ name: teamName });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getTeamStats(matchId) {
    try {
      const data = HLTV.getTeamStats({ id: matchId });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getPlayer(matchId) {
    try {
      const data = HLTV.getPlayer({ id: matchId });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getPlayerByName(playerName) {
    try {
      const data = HLTV.getPlayerByName({ name: `${playerName}` });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getPlayerStats(matchId) {
    try {
      const data = HLTV.getPlayerStats({ id: matchId });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getPlayerRanking(playerStartDate, playerEndDate) {
    try {
      const data = HLTV.getPlayerRanking({
        startDate: `${playerStartDate}`,
        endDate: `${playerEndDate}`,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getEvents() {
    try {
      const data = HLTV.getEvents();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getEvent(eventId) {
    try {
      const data = HLTV.getEvent({ id: eventId });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getEventByName(eventName) {
    try {
      const data = HLTV.getEventByName({ name: eventName });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getPastEvents(playerStartDate, playerEndDate) {
    try {
      const data = HLTV.getPastEvents({
        startDate: `${playerStartDate}`,
        endDate: `${playerEndDate}`,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getNews() {
    try {
      const data = HLTV.getNews();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
