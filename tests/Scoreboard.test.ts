import { ScoreBoard } from "../src/Scoreboard";

describe("ScoreBoard", () => {
  let scoreboard: ScoreBoard;

  beforeEach(() => {
    scoreboard = new ScoreBoard();
  });

  it("should start a new match with initial score 0-0", () => {
    scoreboard.startMatch("Mexico", "Mexico", 0, 0);

    expect(scoreboard.matches[0].homeTeam).toBe("Mexico");
    expect(scoreboard.matches[0].awayTeam).toBe("Canada");
    expect(scoreboard.matches[0].homeScore).toBe(0);
    expect(scoreboard.matches[0].awayScore).toBe(0);
  });
});
