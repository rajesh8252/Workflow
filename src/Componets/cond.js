import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './condition.css';

const Condition = (props) => {
  const [selectSets, setSelectSets] = useState([
    { option1: '', option2: '', option3: '', option4: '' },
  ]);
  
  const handleAddSet = () => {
    setSelectSets([...selectSets, { option1: '', option2: '', option3: '', option4: '' }]);
    console.log(selectSets)
  };

  const handleRemoveSet = (index) => {
    const updatedSets = [...selectSets];
    updatedSets.splice(index, 1);
    setSelectSets(updatedSets);
  };

  const handleSelect = (setIndex, name, value) => {
    setSelectSets((prevSets) => {
      const updatedSets = [...prevSets];
      updatedSets[setIndex][name] = value;
      return updatedSets;
    });
  };

  return (
    <div className="container-fluid mb-2">
        <div 
        className="row align-items-start bg-success justify-content-end">
        <div 
        className="col ml-5 basic">
        condition
        </div>
        <div 
        onClick={props.isConditionOpen}
        className="col down">
        <FontAwesomeIcon 
        icon={faChevronDown} />
        </div>
  </div>
  {props.condition &&
      <div className="container">
        {selectSets.map((set, setIndex) => (
          <div className="d-flex" key={setIndex} style={{ marginTop: "50px", marginBottom: "50px" }}>
            <div className="col">
              <select
                className="form-control input"
                value={set.option1}
                name="option1"
                onChange={(e) => handleSelect(setIndex, 'option1', e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="col">
              <select
                className="form-control input"
                value={set.option2}
                name="option2"
                onChange={(e) => handleSelect(setIndex, 'option2', e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="col">
              <select
                className="form-control input"
                value={set.option3}
                name="option3"
                onChange={(e) => handleSelect(setIndex, 'option3', e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="col d-flex">
              <select
                className="form-control input"
                value={set.option4}
                name="option4"
                onChange={(e) => handleSelect(setIndex, 'option4', e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="col d-flex">
              <button className="btn btn-primary x" onClick={() => handleRemoveSet(setIndex)}>
                X
              </button>
            </div>
          </div>
        ))}
        <div className="d-flex">
          <button className="btn btn-primary add" onClick={handleAddSet}>
            Add
          </button>
        </div>
      </div>
}
    </div>
  );
};

export default Condition;
