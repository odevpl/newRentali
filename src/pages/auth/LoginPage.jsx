import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div>
      <h1>Logowanie</h1>
      <p>Formularz logowania. Konta testowe:</p>
      <ul>
        <li>owner@test.pl / owner123 - panel wlasciciela (/panel)</li>
        <li>guest@test.pl / guest123 - panel goscia (/moje)</li>
      </ul>
      <Link to="/">Wroc na strone glowna</Link>
    </div>
  );
}
