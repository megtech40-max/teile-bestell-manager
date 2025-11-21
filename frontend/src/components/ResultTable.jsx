export default function ResultTable({ data }) {
  const rows = [
    { name: "STAkis", d: data.stakis },
    { name: "AVZ", d: data.avz },
    { name: "W&G", d: data.wg },
  ];

  return (
    <table className="w-full mt-10 border shadow bg-white">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-3 border">Lieferant</th>
          <th className="p-3 border">Preis</th>
          <th className="p-3 border">Verfügbarkeit</th>
          <th className="p-3 border">Alternativen</th>
          <th className="p-3 border">Bestellen</th>
        </tr>
      </thead>

      <tbody>
        {rows.map((r) => (
          <tr key={r.name}>
            <td className="p-3 border">{r.name}</td>
            <td className="p-3 border">{r.d.price}</td>
            <td className="p-3 border">{r.d.available}</td>
            <td className="p-3 border">{r.d.alternatives}</td>
            <td className="p-3 border">
              <a
                href={r.d.order_url}
                target="_blank"
                className="bg-blue-600 text-white px-4 py-1 rounded"
              >
                Bestellen
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}