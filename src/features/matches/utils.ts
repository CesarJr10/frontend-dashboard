export const getResultColor = (result: string) => {
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

export const getResultText = (result: string) => {
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