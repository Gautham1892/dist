import React, { useState } from 'react';
import { useStepperContext } from '../../contexts/StepperContext';

function Payment() {
  const { userData, setUserData } = useStepperContext();
  const [internationalSeminars, setInternationalSeminars] = useState([{ name: '', awarded: '' }]);
  const [nationalConferences, setNationalConferences] = useState([{ name: '', awarded: '' }]);

  const handleAddInternationalSeminars = () => {
    const values = [...internationalSeminars];
    values.push({ name: '', awarded: '' });
    setInternationalSeminars(values);
  };

  const handleAddNationalConferences = () => {
    const values = [...nationalConferences];
    values.push({ name: '', awarded: '' });
    setNationalConferences(values);
  };

  const handleInputChange = (index, event, type) => {
    if (type === 'internationalSeminars') {
      const values = [...internationalSeminars];
      if (event.target.name === 'name') {
        values[index].name = event.target.value;
      } else {
        values[index].awarded = event.target.value;
      }
      setInternationalSeminars(values);
    } else {
      const values = [...nationalConferences];
      if (event.target.name === 'name') {
        values[index].name = event.target.value;
      } else {
        values[index].awarded = event.target.value;
      }
      setNationalConferences(values);
    }
  };

  return (
    <fieldset>
      <h3 align="left">Publications during Research period (attach proof)</h3>
      {internationalSeminars.map((seminar, index) => (
        <div key={index} className="form-row">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={seminar.name}
              onChange={(event) => handleInputChange(index, event, 'internationalSeminars')}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Awarded"
              name="awarded"
              value={seminar.awarded}
              onChange={(event) => handleInputChange(index, event, 'internationalSeminars')}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={seminar.name}
              onChange={(event) => handleInputChange(index, event, 'internationalSeminars')}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={seminar.name}
              onChange={(event) => handleInputChange(index, event, 'internationalSeminars')}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={seminar.name}
              onChange={(event) => handleInputChange(index, event, 'internationalSeminars')}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={seminar.name}
              onChange={(event) => handleInputChange(index, event, 'internationalSeminars')}
            />
          </div>
          <div className="input-group">
            <div className="custom-file">
              <input type="file" className="custom-file-input" id={`upload${index}`} multiple />
              <label className="custom-file-label" htmlFor={`upload${index}`}>
                <i className="ion-android-cloud-outline"></i>Choose file
              </label>
            </div>
          </div>
          <ul className="file_added">
            <li>File Added:</li>
            <li>
              <a href="#">
                <i className="ion-paperclip"></i>national_id_card.png
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ion-paperclip"></i>national_id_card_back.png
              </a>
            </li>
          </ul>
        </div>
      ))}
      <button type="button" onClick={handleAddInternationalSeminars}>
        Add Publications
      </button>

      <h3 align="left">Journals published during Research period (attach proof)</h3>
      {nationalConferences.map((conference, index) => (
        <div key={index} className="form-row">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={conference.name}
              onChange={(event) => handleInputChange(index, event, 'nationalConferences')}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Awarded"
              name="awarded"
              value={conference.awarded}
              onChange={(event) => handleInputChange(index, event, 'nationalConferences')}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={conference.name}
              onChange={(event) => handleInputChange(index, event, 'nationalConferences')}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={conference.name}
              onChange={(event) => handleInputChange(index, event, 'nationalConferences')}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={conference.name}
              onChange={(event) => handleInputChange(index, event, 'nationalConferences')}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={conference.name}
              onChange={(event) => handleInputChange(index, event, 'nationalConferences')}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={conference.name}
              onChange={(event) => handleInputChange(index, event, 'nationalConferences')}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={conference.name}
              onChange={(event) => handleInputChange(index, event, 'nationalConferences')}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={conference.name}
              onChange={(event) => handleInputChange(index, event, 'nationalConferences')}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={conference.name}
              onChange={(event) => handleInputChange(index, event, 'nationalConferences')}
            />
          </div>
          <div className="input-group">
            <div className="custom-file">
              <input type="file" className="custom-file-input" id={`upload${index}`} multiple />
              <label className="custom-file-label" htmlFor={`upload${index}`}>
                <i className="ion-android-cloud-outline"></i>Choose file
              </label>
            </div>
          </div>
          <ul className="file_added">
            <li>File Added:</li>
            <li>
              <a href="#">
                <i className="ion-paperclip"></i>national_id_card.png
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ion-paperclip"></i>national_id_card_back.png
              </a>
            </li>
          </ul>
        </div>
      ))}
      <button type="button" onClick={handleAddNationalConferences}>
        Add Journals
      </button>
    </fieldset>
  );
}

export default Payment;         