import React, { useState, useEffect } from "react";

export default function MatchSetup({
  playerA,
  playerB,
  setPlayerA,
  setPlayerB,
  bestOf,
  setBestOf,
  startMatch,
}) {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
  }, [playerA, playerB, bestOf]);
   useEffect(() => {
    const savedA = localStorage.getItem("playerA");
    const savedB = localStorage.getItem("playerB");
    
    if (savedA) setPlayerA(savedA);
    if (savedB) setPlayerB(savedB);
   
  }, []);

  // Auto-save to Local Storage
  useEffect(() => {
    localStorage.setItem("playerA", playerA);
  }, [playerA]);

  useEffect(() => {
    localStorage.setItem("playerB", playerB);
  }, [playerB]);

  const validate = () => {
    let e = {};

    if (!playerA.trim()) e.playerA = "Player A name is required.";
    else if (playerA.trim().length < 2)
      e.playerA = "Name must be at least 2 characters.";

    if (!playerB.trim()) e.playerB = "Player B name is required.";
    else if (playerB.trim().length < 2)
      e.playerB = "Name must be at least 2 characters.";

    if (
      playerA.trim() &&
      playerB.trim() &&
      playerA.trim().toLowerCase() === playerB.trim().toLowerCase()
    ) {
      e.same = "Player names cannot be the same.";
    }

    if (![3, 5].includes(Number(bestOf))) e.bestOf = "Best Of must be 3 or 5.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleStart = () => {
    if (validate()) 
        localStorage.setItem("myPlayerA",playerA)
        startMatch();
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-blue-900 to-green-900 border-4 border-white/40 rounded-2xl shadow-2xl shadow-blue-500/30">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 tracking-wider">
        <span className="bg-gradient-to-r from-green-300 via-white to-green-300 bg-clip-text text-transparent">
          BADMINTON MATCH SETUP
        </span>
      </h2>

      <div className="space-y-6 md:space-y-8">
        {/* Player A */}
        <div>
          <label className="block text-lg font-semibold text-green-300 mb-2 ml-1">
            PLAYER A
          </label>
          <input
            placeholder="Enter Player Name"
            value={playerA}
            onChange={(e) => setPlayerA(e.target.value)}
            className={`w-full p-4 bg-blue-950 border-2 rounded-xl 
              text-white text-lg placeholder-green-200/60
              focus:outline-none focus:ring-4 transition-all duration-300 hover:bg-blue-900
              shadow-lg
              ${
                errors.playerA || errors.same
                  ? "border-red-400 focus:ring-red-500/40 shadow-red-900/40"
                  : "border-green-300 focus:ring-green-300/40 shadow-green-900/20"
              }`}
          />
          {errors.playerA && (
            <p className="text-red-300 mt-1 text-sm">{errors.playerA}</p>
          )}
        </div>

        {/* VS Divider */}
        <div className="relative flex items-center justify-center">
          <div className="flex-grow border-t-2 border-white/30"></div>
          <span className="mx-4 text-2xl font-black text-white bg-blue-950 px-4 py-1 rounded-full border-2 border-white/40">
            🆚
          </span>
          <div className="flex-grow border-t-2 border-white/30"></div>
        </div>

        {/* Player B */}
        <div>
          <label className="block text-lg font-semibold text-cyan-300 mb-2 ml-1">
            PLAYER B
          </label>
          <input
            placeholder="Enter Player Name"
            value={playerB}
            onChange={(e) => setPlayerB(e.target.value)}
            className={`w-full p-4 bg-blue-950 border-2 rounded-xl 
              text-white text-lg placeholder-cyan-200/60
              focus:outline-none focus:ring-4 transition-all duration-300 hover:bg-blue-900
              shadow-lg
              ${
                errors.playerB || errors.same
                  ? "border-red-400 focus:ring-red-500/40 shadow-red-900/40"
                  : "border-cyan-300 focus:ring-cyan-300/40 shadow-cyan-900/20"
              }`}
          />
          {errors.playerB && (
            <p className="text-red-300 mt-1 text-sm">{errors.playerB}</p>
          )}
        </div>

        {/* Same Name Error */}
        {errors.same && (
          <p className="text-red-400 text-center font-semibold">
            {errors.same}
          </p>
        )}

        {/* Start Button */}
        <div className="pt-6">
          <button
            onClick={handleStart}
            disabled={Object.keys(errors).length > 0}
            className={`w-full py-4 px-6 text-2xl font-extrabold tracking-wider rounded-xl border-4 
transition-all duration-300 active:scale-95
${
  Object.keys(errors).length > 0
    ? "bg-gray-600 text-white/60 border-white/20 cursor-not-allowed"
    : "bg-gradient-to-r from-green-500 via-teal-400 to-blue-500 hover:from-green-400 hover:via-blue-400 hover:to-teal-400 text-white border-white/40 shadow-[0_0_25px_rgba(56,189,248,0.6)] hover:shadow-[0_0_35px_rgba(255,255,255,0.6)]"
}`}
          >
            START MATCH 🏸
          </button>
        </div>
      </div>
    </div>
  );
}
