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

  const handleCleanSpots = () => {
    const confirmCheck = confirm(
      `Você está prestes a limpar o estacionamento. Isso não salvará quaisquer dados no histórico. Deseja continuar?`
    );
    confirmCheck && localStorage.setItem("vagas_ocupadas", JSON.stringify([]));
    setTakenSpots([]);
  };

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
        <div className="flex-between">
          <h1>Estacionamento</h1>
          <button onClick={handleCleanSpots}>Limpar Estacionamento</button>
        </div>

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
