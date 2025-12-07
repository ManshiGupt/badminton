import React, { useEffect } from "react";

export default function Scoreboard({
  playerA,
  playerB,
  scoreA,
  scoreB,
  gameNumber,
  bestOf,
}) {
    // useEffect(()=>{
    //     localStorage.get("playerA")
    // },[])
  return (
    <div className="">
      {/* Live Score Title */}
      <h2
        className="text-3xl font-bold tracking-wider mb-4 
                 bg-gradient-to-r from-green-300 via-white to-green-300 
                 bg-clip-text text-transparent"
      >
        🏸 LIVE SCORE
      </h2>

      {/* Player Names */}
      <div className="text-xl font-semibold text-white mb-2 flex-row wrap-anywhere">
        {/* <h3>{playerA?.charAt(0).toUppercase() + playerA?.slice(1)}</h3> */}
        <h3>{playerA?.charAt(0).toUpperCase() + playerA?.slice(1)}</h3>

        
        {/* <span className="text-green-300 font-bold">vs</span> {playerB} */}
        <h3 className="text-green-300 font-bold">vs</h3>
        <h3>{playerB?.charAt(0).toUpperCase()+ playerB.slice(1)}</h3>
      </div>

      {/* Game Number */}
      <h4 className="text-lg text-green-200 font-medium mb-4">
        Game {gameNumber} / {bestOf}
      </h4>

      {/* Score Display */}
     <div 
  className="text-5xl font-extrabold text-white py-4 
             bg-blue-950/40 rounded-xl border-2 border-white/30 
             shadow-lg shadow-green-900/20 tracking-widest font-mono"
>
  <span className="text-green-300">{scoreA}</span>
  <span className="mx-4 text-white">—</span>
  <span className="text-cyan-300">{scoreB}</span>
</div>

    </div>
  );
}
