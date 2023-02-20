import Button from "@/components/button.component";
import SpaceParking from "@/components/parking/space.parking";
import Head from "next/head";
import { useEffect, useState } from "react";

const Parking = () => {
  const [takenSpots, setTakenSpots] = useState<Number[]>([]);
  const [spots, setSpots] = useState(0);

  useEffect(() => {
    const checkSpots = localStorage.getItem("vagas_ocupadas");
    checkSpots && setTakenSpots(JSON.parse(checkSpots));

    const countSpots = localStorage.getItem("vagas");
    countSpots ? setSpots(JSON.parse(countSpots)) : setSpots(10);
  }, []);

  const handleCleanSpots = () => {
    const confirmCheck = confirm(
      `Você está prestes a limpar o estacionamento. Isso não salvará quaisquer dados no histórico. Deseja continuar?`
    );
    confirmCheck &&
      (localStorage.setItem("vagas_ocupadas", JSON.stringify([])),
      setTakenSpots([]));
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
        <div className="page-title">
          <h1>Estacionamento</h1>
          <Button onClick={handleCleanSpots}>Limpar Estacionamento</Button>
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
