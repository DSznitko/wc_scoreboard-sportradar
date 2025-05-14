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

  it("should finish the match and remove it from scoreboard", () => {
    scoreboard.startMatch("Mexico", "Canada");

    scoreboard.finishMatch("Mexico", "Canada");

    expect(scoreboard.matches).toHaveLength(0);
  });

  it("should return summary ordered by total score", () => {
    scoreboard.startMatch("Mexico", "Canada");
    scoreboard.updateScore("Mexico", "Canada", 2, 3);

    scoreboard.startMatch("Spain", "Brazil");
    scoreboard.updateScore("Spain", "Brazil", 3, 2);

    scoreboard.startMatch("Germany", "France");
    scoreboard.updateScore("Germany", "France", 1, 1);

    const summary = scoreboard.getSummary();

    expect(summary[0].homeTeam).toBe("Spain");
    expect(summary[0].awayTeam).toBe("Brazil");
    expect(summary[1].homeTeam).toBe("Mexico");
    expect(summary[1].awayTeam).toBe("Canada");
    expect(summary[2].homeTeam).toBe("Germany");
    expect(summary[2].awayTeam).toBe("France");
  });
});
