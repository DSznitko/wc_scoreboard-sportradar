import { ScoreBoard } from "../src/Scoreboard";

describe("ScoreBoard", () => {
  let scoreboard: ScoreBoard;

  beforeEach(() => {
    scoreboard = new ScoreBoard();
  });

  // Start match test \\
  describe("startMatch", () => {
    it("should start a new match with initial score 0-0", () => {
      scoreboard.startMatch("Mexico", "Canada");

      expect(scoreboard.matches[0].homeTeam).toBe("Mexico");
      expect(scoreboard.matches[0].awayTeam).toBe("Canada");
      expect(scoreboard.matches[0].homeScore).toBe(0);
      expect(scoreboard.matches[0].awayScore).toBe(0);
    });

    it("should throw error if home or away team is empty", () => {
      expect(() => scoreboard.startMatch("", "Canada")).toThrow();
      expect(() => scoreboard.startMatch("Mexico", "")).toThrow();
    });

    it("should throw error if home and away teams are the same", () => {
      expect(() => scoreboard.startMatch("Mexico", "Mexico")).toThrow();
    });
  });

  // Update match score test \\
  describe("updateScore", () => {
    it("should update the score of a match", () => {
      scoreboard.startMatch("Mexico", "Canada");
      scoreboard.updateScore("Mexico", "Canada", 2, 1);

      expect(scoreboard.matches[0].homeScore).toBe(2);
      expect(scoreboard.matches[0].awayScore).toBe(1);
    });

    it("should throw error when updating non-existing match", () => {
      expect(() => scoreboard.updateScore("X", "Y", 1, 1)).toThrow(
        "Match not found"
      );
    });

    it("should throw error on negative scores", () => {
      scoreboard.startMatch("Mexico", "Canada");
      expect(() => scoreboard.updateScore("Mexico", "Canada", -1, 0)).toThrow(
        "Score can't be negative"
      );
    });
  });

  // Finish match and remove it from scoreboard array test \\
  describe("finishMatch", () => {
    it("should finish the match and remove it from scoreboard", () => {
      scoreboard.startMatch("Mexico", "Canada");

      scoreboard.finishMatch("Mexico", "Canada");

      expect(scoreboard.matches).toHaveLength(0);
    });

    it("should throw error when finishing non-existing match", () => {
      expect(() => scoreboard.finishMatch("A", "B")).toThrow("Match not found");
    });
  });

  // Summary of all matches and sort them in proper way test \\
  describe("getSummary", () => {
    it("should return summary ordered by total score", () => {
      scoreboard.startMatch("Mexico", "Canada");
      scoreboard.updateScore("Mexico", "Canada", 0, 5);

      scoreboard.startMatch("Spain", "Brazil");
      scoreboard.updateScore("Spain", "Brazil", 10, 2);

      scoreboard.startMatch("Germany", "France");
      scoreboard.updateScore("Germany", "France", 2, 2);

      scoreboard.startMatch("Uruguay", "Italy");
      scoreboard.updateScore("Uruguay", "Italy", 6, 6);

      scoreboard.startMatch("Argentina", "Australia");
      scoreboard.updateScore("Argentina", "Australia", 3, 1);

      const summary = scoreboard.getSummary();
      console.log(summary);
      expect(summary[0].homeTeam).toBe("Uruguay");
      expect(summary[0].awayTeam).toBe("Italy");
      expect(summary[1].homeTeam).toBe("Spain");
      expect(summary[1].awayTeam).toBe("Brazil");
      expect(summary[2].homeTeam).toBe("Mexico");
      expect(summary[2].awayTeam).toBe("Canada");
      expect(summary[3].homeTeam).toBe("Argentina");
      expect(summary[3].awayTeam).toBe("Australia");
      expect(summary[4].homeTeam).toBe("Germany");
      expect(summary[4].awayTeam).toBe("France");
    });
  });
});
