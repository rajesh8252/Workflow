import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './condition.css';

const Condition = () => {
  const [selectSets, setSelectSets] = useState([]);
  const [op1, setOp1] = useState('');
  const [op2, setOp2] = useState('');
  const [op3, setOp3] = useState('');
  const [op4, setOp4] = useState('');
  
  const handleAddSet = () => {

    setSelectSets([...selectSets, []]);
  };

  const handleRemoveSet = (index) => {
    // const updatedSets = [...selectSets];
    // updatedSets.splice(index, 1);
    // setSelectSets(updatedSets);
  };

  const handleSelectChange = (setIndex, selectIndex, event) => {
    const value = event.target.value;
    const updatedSets = [...selectSets];
    updatedSets[setIndex][selectIndex] = value;
    setSelectSets(updatedSets);
  };

  const handleSelect=(e)=>
  {
      e.preventDefault();

      console.log(e.target.name+":"+e.target.value);
  }

  return (
    <div className="container-fluid">
      <div className="row align-items-start bg-success justify-content-end">
  <div className="col ml-5 basic">
    condition
  </div>
  <div className="col down">
    <FontAwesomeIcon icon={faChevronDown} />
  </div>
</div>
      <div className="container">
        {selectSets.map((setIndex) => (
          <div className="d-flex" key={setIndex} style={{ marginTop: "50px", marginBottom: "50px" }}>
             <div className="col">
              <select className='form-control input'value={op1} name='option1'onChange={(e)=>handleSelect(e)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              </select>
              </div>
              <div className="col">
              <select className='form-control input'value={op2} name='option2' onChange={(e)=>handleSelect(e)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              </select>
              </div>
              <div className="col">
              <select className='form-control input'value={op3} name='option3' onChange={(e)=>handleSelect(e)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              </select>
              </div>
              <div className="col d-flex">
              <select className='form-control input'value={op4} name='option4' onChange={(e)=>handleSelect(e)}>
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
    </div>
  );
};

export default Condition;
