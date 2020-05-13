import React from 'react';
import { CustomReact } from '../index.js';
import './styles.css';

const Form = () => {
    const [firstName, setFirstName] = CustomReact.useState(null);
    const [secondName, setSecondName] = CustomReact.useState(null);
    const [phone, setPhone] = CustomReact.useState(null);
    const [isDataShow, setIsDataShow] = CustomReact.useState(false);

    const handleFirstNameChange = e => setFirstName(e.target.value);

    const handleSecondNameChange = e => setSecondName(e.target.value);

    const handlePhoneChange = e => setPhone(e.target.value);

    const handleToggleShowData = () => setIsDataShow(!isDataShow);

    return (
      <div>
          <div>
            <input
                type="text"
                className="field"
                placeholder="Input first name"
                onChange={e => handleFirstNameChange(e)}
            />
            <input
                type="text"
                className="field"
                placeholder="Input second name"
                onChange={e => handleSecondNameChange(e)}
            />           
            <input
                type="number"
                className="field"
                placeholder="Input phone number"
                onChange={e => handlePhoneChange(e)}
            />
          </div>
          <div>
            {!isDataShow
                ? <button onClick={handleToggleShowData} className="button">Show form data</button>
                : <button onClick={handleToggleShowData} className="button">Hide form data</button>
            }
          </div>
          {isDataShow &&
            <div>
                <p>Data from state</p>
                <p>First name: {firstName}</p>
                <p>Second name: {secondName}</p>
                <p>Phone: {phone}</p>
            </div>
          }
      </div>
    );
};

export default Form;