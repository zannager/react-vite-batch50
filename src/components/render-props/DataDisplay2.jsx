
import DataFetcher from './DataFetcher';

const DataDisplay2 = () => {
  return (
    <DataFetcher
      render={({ loading, data }) => (
        loading ? <div>Loading...</div> : <div>Data: {data}</div>
      )}
    />
  );
};

export default DataDisplay2;
