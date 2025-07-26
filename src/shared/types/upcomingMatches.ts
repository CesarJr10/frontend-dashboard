export interface UpcomingMatch {
    id: number;
    date: string;
    time: string;
    competition: string;
    venue: string;
    homeTeam: {
        name: string;
        logo: string;
    };
    awayTeam: {
        name: string;
        logo: string;
    };
    status: string;
}