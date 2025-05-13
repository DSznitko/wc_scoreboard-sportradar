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
    if (!homeTeam || !awayTeam)
      throw new Error("each Team can't be an empty string");
    this.matches.push({
      homeTeam,
      awayTeam,
      homeScore: homeScore,
      awayScore: awayScore,
    });
  }
}
