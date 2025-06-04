export class Match {
  constructor(
    public readonly homeTeam: string,
    public readonly awayTeam: string,
    private _homeScore: number = 0,
    private _awayScore: number = 0,
    public readonly startedAt: number
  ) {}
}
