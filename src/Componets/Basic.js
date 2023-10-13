import React from 'react'
import "./Basic.css"
const Basic = () => {
  return (
    <div className="container-fluid form-control">
  <div className="row align-items-start bg-success">
    <div className="col ml-5 basic">
      basic
    </div>
  </div>
  <div className='text-center body1'>
  <div className='row'>
    <div className='col'>
  <div className='d-flex mt-5'>
    <label className='form-control label' style={{border:"none"}}>Name</label>
    <input type='text' className='form-control input'></input>
  </div>
  </div>
  <div className='col'>
  <div className='d-flex mt-5'>
  <label className='form-control label' style={{border:"none"}}>Assigned to</label>
    <select className='form-control input'></select>
  </div>
  </div>
  </div>
  <div className='row'>
    <div className='col'>
  <div className='d-flex mt-5'>
    <label className='form-control label' style={{border:"none"}}>Workflow Module</label>
    <select className='form-control input'></select>
  </div>
  </div>
  <div className='col'>
  <div className='d-flex mt-5'>
  <label className='form-control label' style={{border:"none"}}>Status</label>
  <select className='form-control input'></select>
  </div>
  </div>
  </div>
  <div className='row'>
    <div className='col'>
  <div className='d-flex mt-5'>
    <label className='form-control label' style={{border:"none"}}>Run</label>
    <select className='form-control input'></select>
  </div>
  </div>
  <div className='col'>
  <div className='d-flex mt-5'>
  <label className='form-control label' style={{border:"none"}}>Run on</label>
  <select className='form-control input'></select>
  </div>
  </div>
  </div>
  <div className='row'>
    <div className='col'>
  <div className='d-flex mt-5'>
    <label className='form-control label' style={{border:"none"}}>Name</label>
    <textarea className='form-control textarea'></textarea>
  </div>
  </div>
  </div>
</div>
</div>
  )
}

export default Basic