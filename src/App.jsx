import React, { useState } from "react";
import MatchSetup from "./components/MatchSetup";
import Scoreboard from "./components/Scoreboard";
import Controls from "./components/Controls";
import GameSummary from "./components/GameSummary";

export default function BadmintonMatch() {
  const [step, setStep] = useState("setup");

  const [playerA, setPlayerA] = useState("");
  const [playerB, setPlayerB] = useState("");

  const [bestOf, setBestOf] = useState(3);

  const [games, setGames] = useState([{ scoreA: 0, scoreB: 0 }]);
  const [history, setHistory] = useState([]);

  const currentGame = games[games.length - 1];

  const targetWins = Math.ceil(bestOf / 2);
  const winsA = games.filter((g) => g.winner === "A").length;
  const winsB = games.filter((g) => g.winner === "B").length;

  const matchFinished = winsA === targetWins || winsB === targetWins;

  // Add point
const scorePoint = (player) => {
  if (matchFinished) return;

  const updatedGames = [...games];
  const game = updatedGames[updatedGames.length - 1];

  // Increase score
  if (player === "A") game.scoreA++;
  else game.scoreB++;

  // Track history for undo
  setHistory([...history, player]);

  // Check win condition
  checkGameEnd(game, updatedGames);
};


  // Check game end
const checkGameEnd = (game, allGames) => {
  const { scoreA, scoreB } = game;

  // 21 with 2-point lead or first to 30
  const isWin = (score, opp) =>
    (score >= 21 && score - opp >= 2) || score === 30;

  // Decide winner
  if (isWin(scoreA, scoreB)) {
    game.winner = "A";
  } else if (isWin(scoreB, scoreA)) {
    game.winner = "B";
  } else {
    // Game continues
    setGames([...allGames]);
    return;
  }

  // Count game wins
  const winsA = allGames.filter((g) => g.winner === "A").length;
  const winsB = allGames.filter((g) => g.winner === "B").length;

  // const targetWins = Math.ceil(bestOf / 2);

  // If match finished
  if (winsA === targetWins || winsB === targetWins) {
    setStep("finished");
    setGames([...allGames]);
    return;
  }

  // Otherwise → start new game
  if (allGames.length < bestOf) {
    allGames.push({ scoreA: 0, scoreB: 0 });
  }

  setGames([...allGames]);
};


  // Undo
 const undoLast = () => {
  if (history.length === 0) return;

  const updatedHistory = [...history];
  const last = updatedHistory.pop();

  const updatedGames = [...games];
  const game = updatedGames[updatedGames.length - 1];

  // If game ended, don't undo (simple version)
  if (game.winner) return;

  if (last === "A" && game.scoreA > 0) game.scoreA--;
  if (last === "B" && game.scoreB > 0) game.scoreB--;

  setHistory(updatedHistory);
  setGames(updatedGames);
};


  const startMatch = () => {
    if (!playerA || !playerB) return alert("Enter both names");
    setStep("match");
  };

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: "auto" }}>
     
      {step === "setup" && (
        <MatchSetup
          playerA={playerA}
          playerB={playerB}
          setPlayerA={setPlayerA}
          setPlayerB={setPlayerB}
          bestOf={bestOf}
          setBestOf={setBestOf}
          startMatch={startMatch}
        />
      )}

      {step === "match" && (
        <>
        <div className="min-h-screen max-w-md mx-auto  p-8 bg-gradient-to-br from-blue-900 to-green-900 
                border-4 border-white/40 rounded-2xl shadow-xl shadow-blue-500/30 text-center">
          <Scoreboard
            playerA={playerA}
            playerB={playerB}
            scoreA={currentGame.scoreA}
            scoreB={currentGame.scoreB}
            gameNumber={games.length}
            bestOf={bestOf}
          />
          <Controls
            scorePoint={scorePoint}
            undoLast={undoLast}
            playerA={playerA}
            playerB={playerB}
          />
          </div>
        </>
      )}

      {step === "finished" && (
        <GameSummary games={games} playerA={playerA} playerB={playerB} />
      )}
    </div>
  );
}
