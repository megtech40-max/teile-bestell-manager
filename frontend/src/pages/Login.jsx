import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    stakis_user: "",
    stakis_pass: "",
    avz_user: "",
    avz_pass: "",
    wg_user: "",
    wg_pass: ""
  });

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8000/auth/login", form, {
      headers: { "Content-Type": "multipart/form-data" }
    });

    localStorage.setItem("loggedIn", "true");
    nav("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow p-6 rounded">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Teile Bestell Manager
      </h1>

      <form onSubmit={submit} className="space-y-4">

        <h2 className="font-semibold text-lg">STAkis</h2>
        <input name="stakis_user" placeholder="User" onChange={handle} className="border p-2 w-full" />
        <input name="stakis_pass" type="password" placeholder="Passwort" onChange={handle} className="border p-2 w-full" />

        <h2 className="font-semibold text-lg">AVZ</h2>
        <input name="avz_user" placeholder="User" onChange={handle} className="border p-2 w-full" />
        <input name="avz_pass" type="password" placeholder="Passwort" onChange={handle} className="border p-2 w-full" />

        <h2 className="font-semibold text-lg">W&G</h2>
        <input name="wg_user" placeholder="User" onChange={handle} className="border p-2 w-full" />
        <input name="wg_pass" type="password" placeholder="Passwort" onChange={handle} className="border p-2 w-full" />

        <button className="bg-blue-600 text-white w-full p-2 rounded mt-4">
          Login
        </button>
      </form>
    </div>
  );
}
