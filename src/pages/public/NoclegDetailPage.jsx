import { Link, useParams } from "react-router-dom";

export default function NoclegDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Nocleg - szczegoly</h1>
      <p>ID obiektu: {id}</p>
      <p>Tu bedzie: opis, galeria, cennik, kalendarz, opinie, mapa, formularz kontaktowy.</p>
      <Link to="/noclegi">Wroc do listy</Link>
    </div>
  );
}
