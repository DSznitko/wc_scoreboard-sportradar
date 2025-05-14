import { ScoreBoard } from "../src/Scoreboard";

describe("ScoreBoard", () => {
  let scoreboard: ScoreBoard;

  beforeEach(() => {
    scoreboard = new ScoreBoard();
  });

  it("should start a new match with initial score 0-0", () => {
    scoreboard.startMatch("Mexico", "Canada");

    expect(scoreboard.matches[0].homeTeam).toBe("Mexico");
    expect(scoreboard.matches[0].awayTeam).toBe("Canada");
    expect(scoreboard.matches[0].homeScore).toBe(0);
    expect(scoreboard.matches[0].awayScore).toBe(0);
  });

  it("should update the score of a match", () => {
    scoreboard.startMatch("Mexico", "Canada");
    scoreboard.updateScore("Mexico", "Canada", 2, 1);

    expect(scoreboard.matches[0].homeScore).toBe(2);
    expect(scoreboard.matches[0].awayScore).toBe(1);
  });
});
