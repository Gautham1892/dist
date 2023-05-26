import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import Header from './Header';
import './AdminQuery.css';

const AdminQuery = () => {
  const [selectedDropdown1, setSelectedDropdown1] = useState('');
  const [selectedDropdown2, setSelectedDropdown2] = useState('');
  const [selectedDropdown3, setSelectedDropdown3] = useState('');
  const [selectedDropdown4, setSelectedDropdown4] = useState('');
  const [queryData, setQueryData] = useState(null);

  const navigate = useNavigate();

  const handleDropdown1Change = (event) => {
    const selectedOption = event.target.textContent;
    setSelectedDropdown1(selectedOption);
  };

  const handleDropdown2Change = (event) => {
    const selectedOption = event.target.textContent;
    setSelectedDropdown2(selectedOption);
  };

  const handleDropdown3Change = (event) => {
    const selectedOption = event.target.textContent;
    setSelectedDropdown3(selectedOption);
  };

  const handleDropdown4Change = (event) => {
    const selectedOption = event.target.textContent;
    setSelectedDropdown4(selectedOption);
  };

  const handleQueryClick = () => {
    axios
      .get('/api/query', {
        params: {
          dropdown1: selectedDropdown1,
          dropdown2: selectedDropdown2,
          dropdown3: selectedDropdown3,
          dropdown4: selectedDropdown4,
        },
      })
      .then((response) => {
        setQueryData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleMoreClick = (queryId) => {
    navigate.push(`/querydetails/${queryId}`);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-4/4">
      <Header />
      <section className="multi_step_form">
        <div id="msform">
          <div className="dropdown">
            <button>{selectedDropdown1 || 'Dropdown 1'}</button>
            <div className="dropdown-content">
              <a onClick={handleDropdown1Change}>Option 1</a>
              <a onClick={handleDropdown1Change}>Option 2</a>
              <a onClick={handleDropdown1Change}>Option 3</a>
            </div>
          </div>

          <div className="dropdown">
            <button>{selectedDropdown2 || 'Dropdown 2'}</button>
            <div className="dropdown-content">
              <a onClick={handleDropdown2Change}>Option 1</a>
              <a onClick={handleDropdown2Change}>Option 2</a>
              <a onClick={handleDropdown2Change}>Option 3</a>
            </div>
          </div>

          <div className="dropdown">
            <button>{selectedDropdown3 || 'Dropdown 3'}</button>
            <div className="dropdown-content">
              <a onClick={handleDropdown3Change}>Option 1</a>
              <a onClick={handleDropdown3Change}>Option 2</a>
              <a onClick={handleDropdown3Change}>Option 3</a>
            </div>
          </div>

          <div className="dropdown">
            <button>{selectedDropdown4 || 'Dropdown 4'}</button>
            <div className="dropdown-content">
              <a onClick={handleDropdown4Change}>Option 1</a>
              <a onClick={handleDropdown4Change}>Option 2</a>
              <a onClick={handleDropdown4Change}>Option 3</a>
            </div>
          </div>

          <button
            className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
            onClick={handleQueryClick}
          >
            Query
          </button>
        </div>
      </section>

      {/* Display the query data */}
      {queryData && (
        <div>
        <h3>Query Result:</h3>
        {queryData.map((query, index) => (
          <div key={index}>
            <p>{query.title}</p>
            <button onClick={() => handleMoreClick(query.id)}>More</button>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default AdminQuery;
