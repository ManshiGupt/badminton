import React from "react";

export default function GameSummary({ games, playerA, playerB }) {
  return (
    <div className="mt-0 min-h-screen p-6 bg-gradient-to-br from-blue-950 to-green-900 
                border-4 border-white/20 rounded-2xl shadow-xl shadow-green-500/20">

  {/* Title */}
  <h2 className="text-3xl font-extrabold tracking-wider text-center mb-4">
    <span className="bg-gradient-to-r from-yellow-400 via-white to-yellow-400 
                     bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
      MATCH FINISHED 🏆
    </span>
  </h2>

  {/* Winner */}
  <h3 className="text-2xl font-bold text-green-300 text-center mb-6">
    Winner:{" "}
    <span className="text-yellow-300 drop-shadow-[0_0_6px_rgba(255,255,0,0.5)]">
      {games.filter((g) => g.winner === "A").length >
      games.filter((g) => g.winner === "B").length
        ? playerA
        : playerB}
    </span>
  </h3>

  {/* Game Scores Title */}
  <h4 className="text-xl font-bold text-cyan-300 mb-4 tracking-wide text-center">
    Game Scores
  </h4>

  {/* Game List */}
  <div className="space-y-3">
    {games.map((g, i) => (
      <div
        key={i}
        className="p-4 bg-blue-900/40 border border-white/10 rounded-xl 
                   shadow-md shadow-black/40 flex flex-col 
                   text-white text-lg"
      >
        <div className="font-semibold text-yellow-300">
          Game {i + 1}
        </div>

        <div className="text-2xl font-extrabold my-1 tracking-wider">
          {g.scoreA} <span className="text-cyan-300">–</span> {g.scoreB}
        </div>

        <div className="text-green-300">
          Winner:{" "}
          <span className="font-bold text-pink-300">
            {g.winner === "A" ? playerA : playerB}
          </span>
        </div>
      </div>
    ))}
  </div>

</div>

  );
}
