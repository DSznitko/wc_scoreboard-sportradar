import { Match } from "./Match";
export class ScoreBoard {
  public matches: Match[] = [];
  private matchCounter = 0;

  startMatch(homeTeam: string, awayTeam: string): void {
    if (!homeTeam || !awayTeam) {
      throw new Error("Each team name must be provided");
    }
    if (homeTeam === awayTeam) {
      throw new Error("Teams must be different");
    }

    const newMatch = new Match(homeTeam, awayTeam, 0, 0, this.matchCounter++);
    this.matches.push(newMatch);
  }

  updateScore(
    homeTeam: string,
    awayTeam: string,
    homeScore: number,
    awayScore: number
  ): void {
    const match = this.findMatch(homeTeam, awayTeam);
    match.updateScore(homeScore, awayScore);
  }

  finishMatch(homeTeam: string, awayTeam: string): void {
    const index = this.matches.findIndex((m) => m.isMatch(homeTeam, awayTeam));
    if (index === -1) {
      throw new Error("Match not found");
    }
    this.matches.splice(index, 1);
  }

  getSummary(): Match[] {
    return [...this.matches].sort((a, b) => {
      if (b.totalScore !== a.totalScore) {
        return b.totalScore - a.totalScore;
      }
      return b.startedAt - a.startedAt;
    });
  }

  private findMatch(homeTeam: string, awayTeam: string): Match {
    const match = this.matches.find((m) => m.isMatch(homeTeam, awayTeam));
    if (!match) {
      throw new Error("Match not found");
    }
    return match;
  }
}
