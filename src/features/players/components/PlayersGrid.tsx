import React from "react";
import { motion } from "framer-motion";
import PlayerCard from "./PlayerCard";
import type { Player } from "../../../shared/types/player";
import { containerVariants, cardVariants } from "../../../shared/constants";

interface Props {
  players: Player[];
}

const PlayersGrid: React.FC<Props> = ({ players }) => {
  if (players.length === 0) {
    return (
      <motion.div
        variants={cardVariants}
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-500 text-center"
      >
        <p className="text-gray-500 text-lg py-12">
          No se encontraron jugadores que coincidan con los filtros.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </motion.div>
  );
};

export default PlayersGrid;