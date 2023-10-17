import React, { useState } from 'react'
import Basic from './Basic'
import Condition from './cond'
import Action from './action'
import './Workflow.css'


const Workflow = () => {
  
const [basic,setBasic]=useState(true)
const [condition,setCondition]=useState(true)
const [action,setAction]=useState(true)

const isBasicOpen=()=>
{
      setBasic(!basic)
}
const isConditionOpen=()=>
{
      setCondition(!condition)
}
const isActionOpen=()=>
{
      setAction(!action)
}
return (
    <div>
        <Basic basic={basic} isBasicOpen={isBasicOpen}/>
        <Condition condition={condition} isConditionOpen={isConditionOpen}/>
        <Action action={action} isActionOpen={isActionOpen}/>
        {(basic && action || action )&& <div className='container btnn'>
          <button 
          className='btn btn-danger form-control' 
          style={{width:70,textAlign:'center',alignItems:'center'}}>
            Submit
          </button>
        </div>
}</div>
  )
}

export default Workflow