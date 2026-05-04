import { Link, useParams } from "react-router-dom";

export default function ObiektDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Obiekt - szczegoly</h1>
      <p>ID obiektu: {id}</p>
      <p>Tu beda zakladki: Dane obiektu | Pokoje | Galeria</p>
      <nav>
        <span>Zakladka: Dane obiektu</span> | <span>Zakladka: Pokoje</span> |{" "}
        <span>Zakladka: Galeria</span>
      </nav>
      <Link to="/panel/obiekty">Wroc do listy obiektow</Link>
    </div>
  );
}
