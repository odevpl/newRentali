import { Link } from "react-router-dom";

export default function NoclegiPage() {
  return (
    <div>
      <h1>Noclegi</h1>
      <p>Tu bedzie lista noclegow z filtrami i sortowaniem.</p>
      <Link to="/noclegi/1">Przykladowy nocleg (id: 1)</Link>
    </div>
  );
}
