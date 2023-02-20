interface History {
  date: string;
  time: string;
  spot: number;
  status: string;
}

interface DataHistoryProps {
  history: History[];
}

const DataHistory = ({ history }: DataHistoryProps) => {
  return (
    <div className="history-list">
      {history.length > 0 ? (
        history.map((item: History, k) => {
          return (
            <ul key={k}>
              <li>
                <span>{item.date} </span>
                {item.time}: Vaga {item.spot} foi {item.status}
              </li>
            </ul>
          );
        })
      ) : (
        <h2>Não há histórico</h2>
      )}
    </div>
  );
};

export default DataHistory;
