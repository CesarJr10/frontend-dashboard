import { useState, useEffect, useMemo } from "react";
import { getMockPlayers } from "../../../core/api/footballApi";
import type { Player } from "../../../shared/types/player";

export const usePlayersFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("all");
  const [players, setPlayers] = useState<Player[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const data = await getMockPlayers();
        setPlayers(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoading(false);
      }
    };

    loadPlayers();
  }, []);

  const positions = useMemo(
    () => ["all", ...Array.from(new Set(players.map((p) => p.position)))],
    [players]
  );

  const filteredPlayers = useMemo<Player[]>(
    () =>
      players.filter((player) => {
        const matchesSearch = player.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesPosition =
          selectedPosition === "all" || player.position === selectedPosition;
        return matchesSearch && matchesPosition;
      }),
    [players, searchTerm, selectedPosition]
  );

  return {
    searchTerm,
    setSearchTerm,
    selectedPosition,
    setSelectedPosition,
    positions,
    filteredPlayers,
    isLoading,
    error
  };
};