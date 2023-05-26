import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const { queryId } = useParams();
  const [queryData, setQueryData] = useState(null);

  useEffect(() => {
    // Fetch the query data based on the query ID
    axios
      .get(`/api/query/${queryId}`)
      .then((response) => {
        setQueryData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [queryId]);

  return (
    <div>
      <h1>Details Page</h1>
      <p>Query ID: {queryId}</p>
      {/* Render the detailed information */}
      {queryData && (
        <div>
          <h3>Query Details:</h3>
          <pre>{JSON.stringify(queryData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Details;