# Rentali.pl — Część 1: Scaffold React (dla Codex)

> **Cel:** Wygeneruj gotowy projekt React z routingiem, layoutami i pustymi podstronami.
> Bez stylowania, bez logiki biznesowej, bez API calls.
> Na każdej podstronie: nawigacja (linki z react-router-dom) + `<h1>` z tytułem sekcji.

---

## Stack

- React 18 (Create React App lub Vite)
- react-router-dom v6
- Brak dodatkowych zależności (no UI libraries, no CSS frameworks)

---

## Konta hardcodowane (LocalStorage auth)

```js
// src/data/users.js
export const USERS = [
  {
    id: 1,
    email: "owner@test.pl",
    password: "owner123",
    role: "owner",
    firstName: "Anna",
    lastName: "Kowalska",
  },
  {
    id: 2,
    email: "guest@test.pl",
    password: "guest123",
    role: "guest",
    firstName: "Jan",
    lastName: "Nowak",
  },
];
```

Auth state trzymamy w LocalStorage pod kluczem `rentali_user`.

---

## Struktura projektu

```
rentali/
├── public/
├── src/
│   ├── data/
│   │   └── users.js
│   ├── layouts/
│   │   ├── PublicLayout.jsx       # Navbar publiczny (logo + NOCLEGI + ZALOGUJ SIĘ)
│   │   ├── OwnerLayout.jsx        # Sidebar właściciela + top navbar
│   │   └── GuestLayout.jsx        # Navbar gościa (logo + WYLOGUJ)
│   ├── pages/
│   │   ├── public/
│   │   │   ├── HomePage.jsx
│   │   │   ├── NoclegiPage.jsx
│   │   │   └── NoclegDetailPage.jsx
│   │   ├── auth/
│   │   │   └── LoginPage.jsx
│   │   ├── owner/
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── ObiektyPage.jsx
│   │   │   ├── ObiektDetailPage.jsx   # z zakładkami: Dane / Pokoje / Galeria
│   │   │   ├── KalendarzPage.jsx
│   │   │   ├── PunktyPage.jsx
│   │   │   ├── GaleriaPage.jsx
│   │   │   └── ProfilPage.jsx
│   │   └── guest/
│   │       ├── GuestDashboardPage.jsx
│   │       ├── UlubioneePage.jsx
│   │       └── GuestProfilPage.jsx
│   ├── router/
│   │   └── AppRouter.jsx
│   └── App.jsx
```

---

## Routing (AppRouter.jsx)

```jsx
// src/router/AppRouter.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layouts
import PublicLayout from "../layouts/PublicLayout";
import OwnerLayout from "../layouts/OwnerLayout";
import GuestLayout from "../layouts/GuestLayout";

// Public pages
import HomePage from "../pages/public/HomePage";
import NoclegiPage from "../pages/public/NoclegiPage";
import NoclegDetailPage from "../pages/public/NoclegDetailPage";

// Auth
import LoginPage from "../pages/auth/LoginPage";

// Owner pages
import DashboardPage from "../pages/owner/DashboardPage";
import ObiektyPage from "../pages/owner/ObiektyPage";
import ObiektDetailPage from "../pages/owner/ObiektDetailPage";
import KalendarzPage from "../pages/owner/KalendarzPage";
import PunktyPage from "../pages/owner/PunktyPage";
import GaleriaPage from "../pages/owner/GaleriaPage";
import ProfilPage from "../pages/owner/ProfilPage";

// Guest pages
import GuestDashboardPage from "../pages/guest/GuestDashboardPage";
import UlubioneePage from "../pages/guest/UlubioneePage";
import GuestProfilPage from "../pages/guest/GuestProfilPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* === PUBLIC === */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/noclegi" element={<NoclegiPage />} />
          <Route path="/noclegi/:id" element={<NoclegDetailPage />} />
        </Route>

        {/* === AUTH === */}
        <Route path="/login" element={<LoginPage />} />

        {/* === OWNER PANEL === */}
        <Route path="/panel" element={<OwnerLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="obiekty" element={<ObiektyPage />} />
          <Route path="obiekty/:id" element={<ObiektDetailPage />} />
          <Route path="kalendarz" element={<KalendarzPage />} />
          <Route path="punkty" element={<PunktyPage />} />
          <Route path="galeria" element={<GaleriaPage />} />
          <Route path="profil" element={<ProfilPage />} />
        </Route>

        {/* === GUEST PANEL === */}
        <Route path="/moje" element={<GuestLayout />}>
          <Route index element={<GuestDashboardPage />} />
          <Route path="ulubione" element={<UlubioneePage />} />
          <Route path="profil" element={<GuestProfilPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## Layouty

### PublicLayout.jsx
```jsx
import { Link, Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Rentali.pl</Link>
        <Link to="/noclegi">Noclegi</Link>
        <Link to="/login">Zaloguj się</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
```

### OwnerLayout.jsx
```jsx
import { Link, Outlet } from "react-router-dom";

export default function OwnerLayout() {
  return (
    <div style={{ display: "flex" }}>
      <aside>
        <p>Nazwa użytkownika</p>
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
```

### GuestLayout.jsx
```jsx
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
```

---

## Podstrony — zawartość minimalna

Każda strona ma:
1. `<h1>` z tytułem
2. Luźny opis co tu będzie
3. Linki do powiązanych podstron (dla orientacji praktykanta)

### public/HomePage.jsx
```jsx
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <h1>Strona główna</h1>
      <p>Tu będzie wyszukiwarka noclegów i przykładowe oferty.</p>
      <Link to="/noclegi">Zobacz wszystkie noclegi</Link>
    </div>
  );
}
```

### public/NoclegiPage.jsx
```jsx
import { Link } from "react-router-dom";
export default function NoclegiPage() {
  return (
    <div>
      <h1>Noclegi</h1>
      <p>Tu będzie lista noclegów z filtrami i sortowaniem.</p>
      <Link to="/noclegi/1">Przykładowy nocleg (id: 1)</Link>
    </div>
  );
}
```

### public/NoclegDetailPage.jsx
```jsx
import { useParams, Link } from "react-router-dom";
export default function NoclegDetailPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Nocleg — szczegóły</h1>
      <p>ID obiektu: {id}</p>
      <p>Tu będzie: opis, galeria, cennik, kalendarz, opinie, mapa, formularz kontaktowy.</p>
      <Link to="/noclegi">Wróć do listy</Link>
    </div>
  );
}
```

### auth/LoginPage.jsx
```jsx
import { Link } from "react-router-dom";
export default function LoginPage() {
  return (
    <div>
      <h1>Logowanie</h1>
      <p>Formularz logowania. Konta testowe:</p>
      <ul>
        <li>owner@test.pl / owner123 → panel właściciela (/panel)</li>
        <li>guest@test.pl / guest123 → panel gościa (/moje)</li>
      </ul>
      <Link to="/">Wróć na stronę główną</Link>
    </div>
  );
}
```

### owner/DashboardPage.jsx
```jsx
export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard właściciela</h1>
      <p>Tu będzie: pierwsze dodanie obiektu (gdy brak obiektów) lub statystyki ogólne.</p>
    </div>
  );
}
```

### owner/ObiektyPage.jsx
```jsx
import { Link } from "react-router-dom";
export default function ObiektyPage() {
  return (
    <div>
      <h1>Obiekty</h1>
      <p>Tu będzie lista obiektów właściciela z przyciskiem "Dodaj obiekt".</p>
      <Link to="/panel/obiekty/1">Przejdź do obiektu (id: 1)</Link>
    </div>
  );
}
```

### owner/ObiektDetailPage.jsx
```jsx
import { useParams, Link } from "react-router-dom";
export default function ObiektDetailPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Obiekt — szczegóły</h1>
      <p>ID obiektu: {id}</p>
      <p>Tu będą zakładki: Dane obiektu | Pokoje | Galeria</p>
      <nav>
        <span>Zakładka: Dane obiektu</span> |{" "}
        <span>Zakładka: Pokoje</span> |{" "}
        <span>Zakładka: Galeria</span>
      </nav>
      <Link to="/panel/obiekty">Wróć do listy obiektów</Link>
    </div>
  );
}
```

### owner/KalendarzPage.jsx
```jsx
export default function KalendarzPage() {
  return (
    <div>
      <h1>Kalendarz</h1>
      <p>Tu będzie kalendarz dostępności pokoi dla wszystkich obiektów właściciela.</p>
    </div>
  );
}
```

### owner/PunktyPage.jsx
```jsx
export default function PunktyPage() {
  return (
    <div>
      <h1>Punkty</h1>
      <p>Tu będzie: pozycja w rankingu miejscowości, pozycja generalna, liczba punktów.</p>
      <p>Tabele rankingowe i możliwość zakupu punktów (modal).</p>
    </div>
  );
}
```

### owner/GaleriaPage.jsx
```jsx
export default function GaleriaPage() {
  return (
    <div>
      <h1>Galeria</h1>
      <p>Tu będzie: drag & drop upload zdjęć, siatka miniatur.</p>
    </div>
  );
}
```

### owner/ProfilPage.jsx
```jsx
export default function ProfilPage() {
  return (
    <div>
      <h1>Profil (Klient)</h1>
      <p>Tu będzie: edycja danych użytkownika (imię, nazwisko, email) i zmiana hasła.</p>
    </div>
  );
}
```

### guest/GuestDashboardPage.jsx
```jsx
import { Link } from "react-router-dom";
export default function GuestDashboardPage() {
  return (
    <div>
      <h1>Moje konto — gość</h1>
      <p>Tu będzie przegląd aktywności gościa.</p>
      <Link to="/moje/ulubione">Ulubione</Link>
    </div>
  );
}
```

### guest/UlubioneePage.jsx
```jsx
export default function UlubioneePage() {
  return (
    <div>
      <h1>Ulubione</h1>
      <p>Tu będzie lista ulubionych noclegów zapisanych przez gościa.</p>
    </div>
  );
}
```

### guest/GuestProfilPage.jsx
```jsx
export default function GuestProfilPage() {
  return (
    <div>
      <h1>Profil gościa</h1>
      <p>Tu będzie edycja danych gościa i zmiana hasła.</p>
    </div>
  );
}
```

---

## App.jsx

```jsx
import AppRouter from "./router/AppRouter";

export default function App() {
  return <AppRouter />;
}
```

---

## Dane lokalne (seed)

```js
// src/data/seed.js
// Hardcodowane dane startowe do LocalStorage

export const SEED_OBJECTS = [
  {
    id: 1,
    ownerId: 1,
    name: "U Agnieszki",
    city: "Kołobrzeg",
    address: "ul. Korfantego 23",
    phone: "503 423 223",
    description: "Opis obiektu...",
    amenities: ["łazienka w pokoju", "WiFi", "parking"],
    rooms: [
      {
        id: 1,
        name: "Lux torpeda",
        quantity: 10,
        persons: 10,
        pricePerNight: 12,
        pricePerNightWeekend: 200,
        pricePerPerson: 200,
        pricePerPersonWeekend: 200,
      },
    ],
    photos: [],
    points: 12221,
    rating: 9.0,
  },
];

export const SEED_REVIEWS = [];
export const SEED_FAVORITES = [];
```

---

## Instrukcja uruchomienia (dla praktykanta)

```bash
# 1. Utwórz projekt
npx create-react-app rentali
# lub
npm create vite@latest rentali -- --template react

# 2. Zainstaluj router
cd rentali
npm install react-router-dom

# 3. Podmień src/ zgodnie ze strukturą powyżej

# 4. Uruchom
npm start
```

---

## Czego NIE ma w tym scaffoldzie (zadania dla praktykantów)

- [ ] Stylowanie (CSS / styled-components / Tailwind)
- [ ] Logika logowania (zapis do LocalStorage)
- [ ] Route guards (przekierowanie niezalogowanych)
- [ ] Formularze z walidacją
- [ ] Logika filtrowania noclegów
- [ ] Upload zdjęć (drag & drop)
- [ ] Modal zakupu punktów
- [ ] Kalendarz dostępności
- [ ] System opini i ocen
- [ ] Obliczanie rankingu punktowego
