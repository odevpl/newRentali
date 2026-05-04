import { Link } from "react-router-dom";

export default function ObiektyPage() {
  return (
    <div>
      <h1>Obiekty</h1>
      <p>Tu bedzie lista obiektow wlasciciela z przyciskiem "Dodaj obiekt".</p>
      <Link to="/panel/obiekty/1">Przejdz do obiektu (id: 1)</Link>
    </div>
  );
}
