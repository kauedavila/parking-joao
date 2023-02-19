import Button from "@/components/button.component";
import DataHistory from "@/components/history/data.history";
import Head from "next/head";
import { useEffect, useState } from "react";

const History = () => {
  const [history, setHistory] = useState([
    {
      date: "",
      time: "",
      spot: 0,
      status: "",
    },
  ]);

  useEffect(() => {
    const history = localStorage.getItem("historico");
    const newHistory = history ? JSON.parse(history) : {};
    setHistory(newHistory);
  }, []);

  const handleCleanHistory = () => {
    const confirmCheck = confirm(
      `Você está prestes a limpar o histórico. Deseja continuar?`
    );
    confirmCheck &&
      (localStorage.setItem("historico", JSON.stringify([])), setHistory([]));
  };

  return (
    <>
      <Head>
        <title>Entrada e Saída</title>
        <meta name="description" content="Gerencie o histórico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container ">
        <div className="flex-between">
          <h1>Entrada e Saída</h1>
          <Button onClick={handleCleanHistory}>Limpar Histórico</Button>
        </div>
        <DataHistory history={history} />
      </div>
    </>
  );
};

export default History;
