import { Link, Outlet, useNavigate } from "react-router-dom";

export default function OwnerLayout() {
  const navigate = useNavigate();

  const storedUser =
    localStorage.getItem("rentali_user") ||
    sessionStorage.getItem("rentali_user");

  let userData = null;

  try {
    userData = JSON.parse(storedUser);
  } catch (e) {
    userData = null;
  }

  const fullName =
    userData?.firstName && userData?.lastName
      ? `${userData.firstName} ${userData.lastName}`
      : "Użytkownik";

  const handleLogout = () => {
    localStorage.removeItem("rentali_user");
    sessionStorage.removeItem("rentali_user"); // 🔥 ważne!
    navigate("/", { replace: true });
  };

  return (
    <div style={{ display: "flex" }}>
      <aside>
        <p>{fullName}</p>

        <nav>
          <Link to="/panel/obiekty">Obiekty</Link>
          <Link to="/panel/obiekty/1">Pokoje / oferty</Link>
          <Link to="/panel/kalendarz">Kalendarz</Link>
          <Link to="/panel/punkty">Punkty</Link>
          <Link to="/panel/galeria">Galeria</Link>
          <Link to="/panel/profil">Profil (Klient)</Link>

          <button onClick={handleLogout}>Wyloguj</button>
        </nav>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
}