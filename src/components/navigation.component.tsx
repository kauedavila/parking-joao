import Link from "next/link";

const Navigation = () => {
  const naviItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Estacionamento",
      path: "/parking",
    },
    {
      name: "Histórico",
      path: "/history",
    },
  ];
  return (
    <nav className="navigation">
      <ul>
        {naviItems.map((item, k) => {
          return (
            <li key={k}>
              <Link href={item.path}>
                <div>{item.name}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navigation;
