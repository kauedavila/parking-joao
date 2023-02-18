const SpotParking = ({
  spot,
  takenSpots,
  setTakenSpots,
}: {
  spot: number;
  takenSpots: Number[];
  setTakenSpots: (value: Number[]) => void;
}) => {
  const handleClick = () => {
    const includesSpot = takenSpots.includes(spot);

    const newArray = includesSpot
      ? takenSpots.filter((item) => item !== spot)
      : [...takenSpots, spot];

    const confirmCheck = confirm(
      `Você está prestes a ${
        includesSpot ? `liberar` : `ocupar`
      } a [Vaga ${spot}]. Deseja continuar?`
    );

    confirmCheck &&
      (saveHistory(includesSpot, spot),
      localStorage.setItem("vagas_ocupadas", JSON.stringify(newArray)),
      setTakenSpots(newArray));
  };

  const saveHistory = (includesSpot: boolean, spot: number) => {
    const history = localStorage.getItem("historico");
    const date = new Date();
    const newHistory = history ? JSON.parse(history) : [];

    newHistory.push({
      vaga: spot,
      data: date.toLocaleString(),
      status: includesSpot ? "Liberada" : "Ocupada",
    });

    localStorage.setItem("historico", JSON.stringify(newHistory));
  };

  return (
    <div
      className={`parking-spot ${
        takenSpots.includes(spot) && "parking-spot-taken"
      }`}
      onClick={handleClick}
    >
      <h1>{spot}</h1>
    </div>
  );
};

export default SpotParking;
