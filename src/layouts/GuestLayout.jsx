import { Link, Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Rentali.pl</Link>
        <Link to="/moje/ulubione">Ulubione</Link>
        <Link to="/moje/profil">Profil</Link>
        <Link to="/login">Wyloguj</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
