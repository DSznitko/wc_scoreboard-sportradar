export class Match {
  constructor(
    public readonly homeTeam: string,
    public readonly awayTeam: string,
    private _homeScore: number = 0,
    private _awayScore: number = 0,
    public readonly startedAt: number
  ) {}

  get homeScore(): number {
    return this._homeScore;
  }

  get awayScore(): number {
    return this._awayScore;
  }

  get totalScore(): number {
    return this._homeScore + this._awayScore;
  }

  updateScore(homeScore: number, awayScore: number): void {
    if (homeScore < 0 || awayScore < 0) {
      throw new Error("Score can't be negative");
    }
    this._homeScore = homeScore;
    this._awayScore = awayScore;
  }

  isMatch(home: string, away: string): boolean {
    return this.homeTeam === home && this.awayTeam === away;
  }
}
