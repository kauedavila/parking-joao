const DataHistory = ({
  history,
}: {
  history: { date: string; time: string; spot: number; status: string }[];
}) => {
  return (
    <div className="history-list">
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
                  <span
                    className={`${
                      k === 0 || history[k - 1].date !== item.date
                        ? "history-date"
                        : ""
                    }`}
                  >
                    {item.date}{" "}
                  </span>
                  {item.time}: Vaga {item.spot} foi {item.status}
                </li>
              </ul>
            );
          }
        )
      ) : (
        <h2>Não há histórico</h2>
      )}
    </div>
  );
};

export default DataHistory;
