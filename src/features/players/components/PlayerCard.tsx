import React from "react";
import { motion } from "framer-motion";
import type { Player } from "../../../shared/types/player"; 
import { cardVariants, positionColors } from "../../../shared/constants";

interface Props {
  player: Player;
}

const PlayerCard: React.FC<Props> = ({ player }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ scale: 1.0, y: -2 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
  >
    <div className="relative">
      <img src={player.photo} alt={player.name} loading="lazy" className="w-full h-48 object-cover" />
      <div
        className={`${positionColors[player.position] || "bg-gray-500"} text-white px-2 py-1 rounded-full text-xs font-semibold absolute top-4 left-4`}
      >
        {player.position}
      </div>
      <div className="absolute top-6 right-6 bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-md">
        {player.dorsal}
      </div>
    </div>

    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{player.name}</h3>
      <p className="text-md text-gray-600">
        {player.age} años • {player.nationality}
      </p>
      <p className="text-sm text-gray-600 mb-3">
        {player.height}  {player.weight}
      </p>

      <div className="grid grid-cols-3 gap-2 text-center text-sm">
        <div className="bg-gray-50 rounded p-2">
          <div className="font-bold text-blue-600">{player.goals}</div>
          <div className="text-gray-600">Goles</div>
        </div>
        <div className="bg-gray-50 rounded p-2">
          <div className="font-bold text-green-600">{player.assists}</div>
          <div className="text-gray-600">Asist.</div>
        </div>
        <div className="bg-gray-50 rounded p-2">
          <div className="font-bold text-purple-600">{player.matches}</div>
          <div className="text-gray-600">Partidos</div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between text-sm">
        <span className="text-yellow-600 font-semibold">⚠️ {player.yellowCards}</span>
        <span className="text-red-600 font-semibold">🟥 {player.redCards}</span>
        <span className="text-green-600 font-semibold">{player.marketValue}</span>
      </div>
    </div>
  </motion.div>
);

export default PlayerCard;
