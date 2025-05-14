export class ScoreBoard {
  matches: {
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
  }[] = [];

  startMatch(homeTeam: string, awayTeam: string): void {
    if (!homeTeam || !awayTeam)
      throw new Error("each Team can't be an empty string");

    if (homeTeam === awayTeam) throw new Error("Teams must be different");
    this.matches.push({
      homeTeam,
      awayTeam,
      homeScore: 0,
      awayScore: 0,
    });
  }

  updateScore(
    homeTeam: string,
    awayTeam: string,
    homeScore: number,
    awayScore: number
  ): void {
    this.matches[0].homeTeam = homeTeam;
    this.matches[0].awayTeam = awayTeam;
    this.matches[0].homeScore = homeScore;
    this.matches[0].awayScore = awayScore;
  }
}
