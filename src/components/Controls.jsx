import React from "react";

export default function Controls({ scorePoint, undoLast, playerA, playerB }) {
  return (
    // <div className="max-w-md mx-auto mt-8 p-6 bg-gradient-to-br from-blue-900 to-green-900 
    //             border-4 border-white/40 rounded-2xl shadow-xl shadow-blue-500/30 space-y-6">
 <div className=" mt-8 py-6 space-y-6">

  {/* 2-Column Button Grid */}
  <div className="grid grid-cols-2 gap-4">
    
    {/* Player A +1 */}
    <button
      onClick={() => scorePoint("A")}
      className="py-4 text-lg font-bold rounded-xl wrap-anywhere
                 bg-gradient-to-r from-green-500 to-blue-500
                 hover:from-green-400 hover:to-blue-400
                 text-white border-2 border-white/40 shadow-lg
                 active:scale-95 transition-all duration-300"
    >
      🏸 {playerA} +1
    </button>

    {/* Player B +1 */}
    <button
      onClick={() => scorePoint("B")}
      className="py-4 text-lg font-bold rounded-xl wrap-anywhere
                 bg-gradient-to-r from-cyan-500 to-teal-500
                 hover:from-cyan-400 hover:to-teal-400
                 text-white border-2 border-white/40 shadow-lg
                 active:scale-95 transition-all duration-300"
    >
      🏸 {playerB} +1
    </button>

  </div>

  {/* Undo Button */}
  <button
    onClick={undoLast}
    className="w-full py-3 text-lg font-semibold rounded-xl 
               bg-blue-950/40 text-white border-2 border-white/30
               hover:bg-blue-900/40 hover:border-white/50
               active:scale-95 transition-all duration-300
               shadow-md"
  >
    ↩️ Undo Last Point
  </button>
</div>

  );
}
