export class ScoreBoard {
  matches: {
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
  }[] = [];

  startMatch(
    homeTeam: string,
    awayTeam: string,
    homeScore: number,
    awayScore: number
  ): void {
    this.matches.push({
      homeTeam,
      awayTeam,
      homeScore: homeScore,
      awayScore: awayScore,
    });
  }
}
