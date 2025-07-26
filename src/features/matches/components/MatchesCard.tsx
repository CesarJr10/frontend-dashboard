import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import type { Match } from "../../../shared/types/match";

interface MatchCardProps {
  match: Match;
}

const getResultColor = (result: string) => {
  switch (result) {
    case "win":
      return "bg-green-500";
    case "draw":
      return "bg-yellow-500";
    case "loss":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const getResultText = (result: string) => {
  switch (result) {
    case "win":
      return "Victoria";
    case "draw":
      return "Empate";
    case "loss":
      return "Derrota";
    default:
      return "Sin resultado";
  }
};

const formatDate = (dateString: string) => {
  return dateString;
};

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const isHome = match.homeTeam.name === "FC Barcelona";

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-3">
            <div className={`${getResultColor(match.result)} text-white px-3 py-1 rounded-full text-sm font-bold`}>
              {getResultText(match.result)}
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <Calendar className="mr-1" size={16} />
              {formatDate(match.date)}
            </div>
            <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
              {match.competition}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-lg font-bold">FC Barcelona</div>
              <div className="text-2xl font-bold text-blue-900">
                {match.homeGoals}
              </div>
            </div>
            <div className="text-gray-400 font-bold">-</div>
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-red-600">
                {match.awayGoals}
              </div>
              <div className="text-lg font-bold">{match.awayTeam.name}</div>
            </div>
          </div>

          {match.scorers && match.scorers.length > 0 && (
            <div className="mt-3 text-sm text-gray-600">
              <span className="font-semibold">Goleadores: </span>
              {match.scorers.join(", ")}
            </div>
          )}
        </div>

        <div className="lg:text-right space-y-2">
          <div className="flex lg:justify-end items-center text-sm text-gray-600">
            <MapPin className="mr-1" size={16} />
            {match.venue}
          </div>
          <div className="flex lg:justify-end items-center text-sm text-gray-600">
            <Users className="mr-1" size={16} />
            {match.attendance?.toLocaleString()} espectadores
          </div>
          <div className="flex lg:justify-end items-center text-sm">
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                isHome
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {isHome ? "Local" : "Visitante"}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MatchCard;