import React from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { cardVariants } from "../../../shared/constants";
import type { Player } from "../../../shared/types/player";

interface PlayersFilterProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedPosition: string;
  setSelectedPosition: (value: string) => void;
  positions: string[];
  filteredPlayers: Player[]; 
}

const PlayersFilter: React.FC<PlayersFilterProps> = ({
  searchTerm,
  setSearchTerm,
  selectedPosition,
  setSelectedPosition,
  positions,
}) => (
  <motion.div variants={cardVariants} className="bg-white rounded-xl p-6 shadow-lg ">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Plantilla 2024/25</h2>
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 relative">
        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar jugador..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-gray-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="relative">
        <Filter size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <select
          className="pl-10 pr-8 py-2 rounded-lg border border-gray-300 focus:ring-1 focus:ring-gray-400 cursosr-pointer"
          value={selectedPosition}
          onChange={(e) => setSelectedPosition(e.target.value)}
        >
          {positions.map((pos) => (
            <option key={pos} value={pos}>
              {pos === "all" ? "Todas las posiciones" : pos}
            </option>
          ))}
        </select>
      </div>
    </div>

    
  </motion.div>
);

export default PlayersFilter;