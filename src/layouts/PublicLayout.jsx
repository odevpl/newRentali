import { Link, Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Rentali.pl</Link>
        <Link to="/noclegi">Noclegi</Link>
        <Link to="/login">Zaloguj sie</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
