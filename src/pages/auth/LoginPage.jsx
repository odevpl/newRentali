import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { USERS } from "../../data/users";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      setError("Nieprawidłowy email lub hasło");
      return;
    }

    // ------USER SAVE-------

    const storage = remember ? localStorage : sessionStorage;
    storage.setItem("rentali_user", JSON.stringify(user));

    // ------RETRACK-------

    if (user.role === "owner") {
      navigate("/panel");
    } else {
      navigate("/moje");
    }
  };

  return (
    <div>
      <h1>Logowanie</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Hasło:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label>
            <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
            Zapamiętaj hasło
          </label>
        </div>

        <button type="submit">Zaloguj</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>Konta testowe:</p>
      <ul>
        <li>owner@test.pl / owner123</li>
        <li>guest@test.pl / guest123</li>
      </ul>

      <Link to="/">Wróć na stronę główną</Link>
    </div>
  );
}