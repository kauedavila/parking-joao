import Head from "next/head";
import { useEffect, useState } from "react";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const history = localStorage.getItem("historico");
    const newHistory = history ? JSON.parse(history) : {};

    console.log(newHistory);
    setHistory(newHistory);
  }, []);

  return (
    <>
      <Head>
        <title>Histórico</title>
        <meta name="description" content="Gerencie o histórico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1>Histórico</h1>
        {history?.map(
          (item: { data: string; vaga: number; status: string }, k) => {
            return (
              <div key={k}>
                <p>
                  {item.data}: Vaga {item.vaga} foi {item.status}
                </p>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default History;
