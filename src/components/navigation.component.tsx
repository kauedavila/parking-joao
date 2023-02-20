import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const { asPath } = useRouter();

  const naviItems = [
    {
      name: "Home",
      path: "/",
      icon: "home",
    },
    {
      name: "Estacionamento",
      path: "/parking",
      icon: "parking",
    },
    {
      name: "Histórico",
      path: "/history",
      icon: "history",
    },
  ];
  return (
    <nav className="navigation">
      <ul>
        {naviItems.map((item, k) => {
          return (
            <li key={k}>
              <Link href={item.path}>
                <div
                  className={`navi-flex ${
                    item.path === asPath ? "navi-active" : ""
                  }`}
                >
                  <Image
                    src={`/${item.icon}.svg`}
                    width={20}
                    height={20}
                    alt={item.name}
                  />

                  <p>{item.name}</p>
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
