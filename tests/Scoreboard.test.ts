import { ScoreBoard } from "../src/Scoreboard";

describe("ScoreBoard", () => {
  let scoreboard: ScoreBoard;

  beforeEach(() => {
    scoreboard = new ScoreBoard();
  });

  it("should start a new match with initial score 0-0", () => {
    scoreboard.startMatch("Mexico", "Canada", 0, 0);

    expect(scoreboard.matches[0].homeTeam).toBe("Mexico");
    expect(scoreboard.matches[0].awayTeam).toBe("Canada");
    expect(scoreboard.matches[0].homeScore).toBe(0);
    expect(scoreboard.matches[0].awayScore).toBe(0);
  });

  //1st edge case for startMatch
  it("should not allow starting a match with empty team names", () => {
    expect(() => scoreboard.startMatch("", "Canada", 0, 0)).toThrow();
    expect(() => scoreboard.startMatch("Mexico", "", 0, 0)).toThrow();
  });
});
