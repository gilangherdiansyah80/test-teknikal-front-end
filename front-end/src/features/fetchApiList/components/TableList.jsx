import { useState, useEffect } from "react";

const TableList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/ability");
      setData(response?.results);
      console.log(response.results.name);
    };

    fetchData();
  }, []);
  return (
    <main>
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
        </div>
      ))}
    </main>
  );
};

export default TableList;
