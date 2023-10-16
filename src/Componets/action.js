import React, { useState } from 'react'

const Action = () => {
const selectSets=useState(['','',''])


  return (
    <div className="container-fluid">
      <div className="row align-items-start bg-success">
        <div className="col ml-5 basic">action</div>
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
      </div>
  )
}

export default Action