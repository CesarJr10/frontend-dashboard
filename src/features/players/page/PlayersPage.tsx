import React from "react";
import { motion } from "framer-motion";
import { usePlayersFilter } from "../hooks/usePlayersFilter";
import PlayersFilter from "../components/PlayersFilter";
import PlayersGrid from "../components/PlayersGrid";
import { containerVariants } from "../../../shared/constants";

const PlayersPage: React.FC = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedPosition,
    setSelectedPosition,
    positions,
    filteredPlayers,
    isLoading,
    error
  } = usePlayersFilter();

  if (isLoading) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <motion.div className="text-center py-12 bg-white rounded-xl shadow-lg">
          <p className="text-gray-500 text-lg">Cargando jugadores...</p>
        </motion.div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <motion.div className="text-center py-12 bg-white rounded-xl shadow-lg">
          <p className="text-red-500 text-lg">Error al cargar los jugadores: {error.message}</p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <PlayersFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedPosition={selectedPosition}
        setSelectedPosition={setSelectedPosition}
        filteredPlayers={filteredPlayers}
        positions={positions}
      />

      <PlayersGrid players={filteredPlayers} />
    </motion.div>
  );
};

export default PlayersPage;