import { useState } from "react";
import axios from "axios";
import ResultTable from "../components/ResultTable";

export default function Dashboard() {
  const [oe, setOE] = useState("");
  const [results, setResults] = useState(null);

  const search = async () => {
    const r = await axios.get(`http://localhost:8000/check/${oe}`);
    setResults(r.data);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">

      <h1 className="text-3xl font-bold mb-6">OE-Abfrage</h1>

      <div className="flex space-x-4">
        <input
          value={oe}
          onChange={(e) => setOE(e.target.value)}
          placeholder="OE-Nummer eingeben…"
          className="flex-1 border p-2 rounded"
        />
        <button
          onClick={search}
          className="bg-green-600 text-white px-6 rounded"
        >
          Suchen
        </button>
      </div>

      {results && <ResultTable data={results} />}
    </div>
  );
}