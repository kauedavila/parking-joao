import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const { asPath } = useRouter();

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
                <div className={`${item.path === asPath ? "navi-active" : ""}`}>
                  {item.name}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navigation;
