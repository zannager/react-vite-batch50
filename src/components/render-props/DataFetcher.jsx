import { useState, useEffect } from 'react';

const DataFetcher = ({ render }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate data fetch
    const fetchData = () => {
      setTimeout(() => {
        setData('Fetched Data');
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  return render({ loading, data });
};

export default DataFetcher;
