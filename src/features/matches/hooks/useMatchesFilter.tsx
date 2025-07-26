import { useState, useEffect, useMemo } from "react";
import { getMockMatches } from "../../../core/api/footballApi";
import type { Match } from "../../../shared/types/match";

export const useMatchesFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompetition, setSelectedCompetition] = useState("all");
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadMatches = async () => {
      try {
        const data = await getMockMatches();
        setMatches(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setIsLoading(false);
      }
    };

    loadMatches();
  }, []);

  const competitions = useMemo(
    () => ["all", ...Array.from(new Set(matches.map((m) => m.competition)))],
    [matches]
  );

  const filteredMatches = useMemo<Match[]>(
    () =>
      matches.filter((match) => {
        const matchesCompetition =
          selectedCompetition === "all" || match.competition === selectedCompetition;
        return matchesCompetition;
      }),
    [matches, selectedCompetition]
  );

  return {
    searchTerm,
    setSearchTerm,
    selectedCompetition,
    setSelectedCompetition,
    competitions,
    filteredMatches,
    isLoading,
    error
  };
};