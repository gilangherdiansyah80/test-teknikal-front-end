import { useState, useEffect } from "react";

const TableList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/ability");
      const result = await response.json();
      setData(result.results);
    };

    fetchData();
  }, []);
  return (
    <main className="w-full lg:w-3/5 lg:self-center">
      <table className="min-w-full text-sm text-gray-700">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-center">
            <th className="px-6 py-3 font-semibold tracking-wide border-b border-gray-200">
              Name
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr className="px-6 py-3 border-b border-gray-100 text-4xl">
              {item.name}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default TableList;
