import Head from "next/head";
import { useEffect, useState } from "react";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const history = localStorage.getItem("historico");
    const newHistory = history ? JSON.parse(history) : {};

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

        {history.length > 0 ? (
          history.map(
            (
              item: {
                date: string;
                time: string;
                spot: number;
                status: string;
              },
              k
            ) => {
              return (
                <ul key={k}>
                  <li>
                    {item.date} {item.time}: Vaga {item.spot} foi {item.status}
                  </li>
                </ul>
              );
            }
          )
        ) : (
          <h2>Não há histórico</h2>
        )}
      </div>
    </>
  );
};

export default History;
