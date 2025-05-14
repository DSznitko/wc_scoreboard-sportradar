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
    if (homeScore < 0 || awayScore < 0)
      throw new Error("Scores cannot be negative");

    const currentMatch = this.matches.find(
      (m) => m.homeTeam === homeTeam && m.awayTeam === awayTeam
    );
    if (!currentMatch) throw new Error("Match not found");

    currentMatch.homeScore = homeScore;
    currentMatch.awayScore = awayScore;
  }
}
