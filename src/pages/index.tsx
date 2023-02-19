import Head from "next/head";

export default function Home() {
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const quantity = document.getElementById("quantity") as HTMLInputElement;
    localStorage.setItem("vagas", quantity.value);
  };

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <div className="logo-flex">
          <h1>LOGO</h1>
        </div>
        <div className="form-flex">
          <form>
            <label htmlFor="quantity">
              Digite quantas vagas o estacionamento tem:
            </label>
            <input type="number" id="quantity" />
            <button onClick={(e) => handleSubmit(e)} type="submit">
              Enviar
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
