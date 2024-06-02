import { useState, useEffect } from 'react';

// Higher-Order Component
const withLoading = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
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

    if (loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent data={data} {...props} />;
  };
};

export default withLoading;
