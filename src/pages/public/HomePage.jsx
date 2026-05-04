import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Strona glowna</h1>
      <p>Tu bedzie wyszukiwarka noclegow i przykladowe oferty.</p>
      <Link to="/noclegi">Zobacz wszystkie noclegi</Link>
    </div>
  );
}
