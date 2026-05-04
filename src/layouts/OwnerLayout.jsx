import { Link, Outlet } from "react-router-dom";

export default function OwnerLayout() {
  return (
    <div style={{ display: "flex" }}>
      <aside>
        <p>Nazwa uzytkownika</p>
        <nav>
          <Link to="/panel/obiekty">Obiekty</Link>
          <Link to="/panel/obiekty/1">Pokoje / oferty</Link>
          <Link to="/panel/kalendarz">Kalendarz</Link>
          <Link to="/panel/punkty">Punkty</Link>
          <Link to="/panel/galeria">Galeria</Link>
          <Link to="/panel/profil">Profil (Klient)</Link>
          <Link to="/login">Wyloguj</Link>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
