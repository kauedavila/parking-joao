import SpaceParking from "@/components/parking/space.parking";
import Head from "next/head";
import { useEffect, useState } from "react";

const Parking = () => {
  const [takenSpots, setTakenSpots] = useState<Number[]>([]);

  useEffect(() => {
    const spots = localStorage.getItem("vagas_ocupadas");
    spots && setTakenSpots(JSON.parse(spots));
  }, []);

  const spots = 25;

  return (
    <>
      <Head>
        <title>Estacionamento</title>
        <meta
          name="description"
          content="Gerencie as vagas do estacionamento"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1>Estacionamento</h1>

        <SpaceParking
          takenSpots={takenSpots}
          setTakenSpots={setTakenSpots}
          spots={spots}
        />
      </div>
    </>
  );
};

export default Parking;
