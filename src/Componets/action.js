import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const Action = (props) => {
const selectSets=useState(['','',''])


  return (
    <div className="container-fluid">
   <div className="row align-items-start bg-success justify-content-end">
  <div className="col ml-5 basic">
    action
  </div>
  <div className="col down" onClick={props.isActionOpen}>
    <FontAwesomeIcon icon={faChevronDown} />
  </div>
</div>
    { props.action &&
      <div className='container-fluid'>
      <div className="container">
        
      <div className='row'>
            <label>Select Options</label>
      </div>
        <div className='row'>
      <select
                className="form-control input"
                name="option1"
                style={{fontSize:"11px"}}
                // onChange={(e) => handleSelect(setIndex, 'option1', e.target.value)}
                >
                  <option>Create Record</option>
                  <option>Modify Record</option>
                  <option>Delete the Record</option>
                  <option>Sending Email</option>
      </select> 
      </div>
      </div>
      <div className="container">
        {selectSets.map((set, setIndex) => (
          <div className="d-flex" key={setIndex} style={{ marginTop: "50px", marginBottom: "50px" }}>
            <div className="col">
              <select
                className="form-control input"
                value={set.option1}
                name="option1"
                // onChange={(e) => handleSelect(setIndex, 'option1', e.target.value)}
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
                // onChange={(e) => handleSelect(setIndex, 'option2', e.target.value)}
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
                // onChange={(e) => handleSelect(setIndex, 'option3', e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="col d-flex">
              <button className="btn btn-primary x" 
              // onClick={() => handleRemoveSet(setIndex)}
              >
                X
              </button>
            </div>
          </div>
        ))}
        <div className="d-flex">
          <button className="btn btn-primary add" 
          // onClick={handleAddSet}
          > Add
          </button>
        </div>
      </div>

 </div>} </div>
  )
}
export default Action