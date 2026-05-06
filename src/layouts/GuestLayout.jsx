import { Link, Outlet, useNavigate } from "react-router-dom";

export default function GuestLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("rentali_user");
    navigate("/", { replace: true });
  };

  return (
    <div>
      <nav>
        <Link to="/">Rentali.pl</Link>
        <Link to="/moje/ulubione">Ulubione</Link>
        <Link to="/moje/profil">Profil</Link>

        <button onClick={handleLogout}>Wyloguj</button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}