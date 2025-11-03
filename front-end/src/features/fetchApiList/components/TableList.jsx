import UseFetch from "../hooks/UseFetch";

const TableList = () => {
  const { dataList } = UseFetch;
  return (
    <main>
      {dataList.map((item) => {
        return (
          <div>
            <h1>{item.name}</h1>
          </div>
        );
      })}
    </main>
  );
};

export default TableList;
