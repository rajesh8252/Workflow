import React from 'react'
import Basic from './Basic'
import Condition from './cond'
import Action from './action'
import './Workflow.css'

const Workflow = () => {
  return (
    <div>
        <Basic/>
        <Condition/>
        <Action/>
        <div className='container btnn'>
          <button 
          className='btn btn-danger form-control' 
          style={{width:70,textAlign:'center',alignItems:'center'}}>
            Submit
          </button>
        </div>
    </div>
  )
}

export default Workflow