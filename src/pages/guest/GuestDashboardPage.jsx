import { Link } from "react-router-dom";

export default function GuestDashboardPage() {
  return (
    <div>
      <h1>Moje konto - gosc</h1>
      <p>Tu bedzie przeglad aktywnosci goscia.</p>
      <Link to="/moje/ulubione">Ulubione</Link>
    </div>
  );
}
