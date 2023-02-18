import SpotParking from "./spot.parking";

const SpaceParking = ({
  spots,
  takenSpots,
  setTakenSpots,
}: {
  spots: number;
  takenSpots: Number[];
  setTakenSpots: (value: Number[]) => void;
}) => {
  return (
    <div className="parking-space">
      {Array.from({ length: spots }, (_, i) => (
        <div key={i}>
          <SpotParking
            takenSpots={takenSpots}
            setTakenSpots={setTakenSpots}
            spot={i + 1}
          />
        </div>
      ))}
    </div>
  );
};

export default SpaceParking;
