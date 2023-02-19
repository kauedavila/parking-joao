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
                <p>{item.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navigation;
