import { useState } from "react";

export default function Auth({ active }) {
  const [logged, setLogged] = useState(false);

  return (
    <section className={`page ${active ? "active" : ""}`}>
      <div className="text-center">
        <h1 className="big mb-6">{logged ? "Welcome Back" : "Login"}</h1>

        {!logged ? (
          <button className="btn btn-primary" onClick={() => setLogged(true)}>
            Demo Login
          </button>
        ) : (
          <button className="btn" onClick={() => setLogged(false)}>
            Logout
          </button>
        )}
      </div>
    </section>
  );
}
